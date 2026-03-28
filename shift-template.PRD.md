# Shift Templates — Product Requirements Document

## Overview

Shift templates define the concrete time slots that exist in a business. Before we can generate rotas, we need to know what shifts need to be filled — their times, which days they run, and staffing requirements.

**Dependency:** This feature unblocks rota generation (F5). Availability parsing (Phase 1) already categorizes staff availability into morning/afternoon/evening — shift templates give those categories concrete meaning.

---

## Goal

Allow the admin to define and manage shift templates for their business so the system knows:
- What shifts exist (e.g., "Morning", "Lunch Rush", "Evening")
- When they run (start/end times, which days of the week)
- Staffing requirements (minimum staff, required roles with counts)

---

## User Stories

### Role Management
1. **As an admin**, I want to define custom roles for my business (e.g., Server, Host, Chef) so I can specify staffing requirements that match my operation.
2. **As an admin**, I want to edit or delete roles when my business needs change.

### Shift Templates
3. **As an admin**, I want to create shift templates so the system knows what shifts need to be staffed.
4. **As an admin**, I want to edit shift templates when business hours change.
5. **As an admin**, I want to delete shift templates that no longer exist.
6. **As an admin**, I want to see all my shift templates at a glance.
7. **As an admin**, I want to specify minimum staff per shift so the AI knows how many people to schedule.
8. **As an admin**, I want to specify required roles with counts per shift (e.g., "2 Servers, 1 Host") so the AI respects role requirements that vary by time of day.

---

## Data Model

```sql
-- Business-defined roles
CREATE TABLE roles (
  id TEXT PRIMARY KEY,
  business_id TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE,
  UNIQUE(business_id, name)
);

-- Shift templates
CREATE TABLE shift_templates (
  id TEXT PRIMARY KEY,
  business_id TEXT NOT NULL,
  name TEXT NOT NULL,
  start_time TEXT NOT NULL,      -- "08:00" (24hr format)
  end_time TEXT NOT NULL,        -- "13:00"
  min_staff INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
);

-- Which days each shift runs (day is enum-constrained)
CREATE TABLE shift_template_days (
  id TEXT PRIMARY KEY,
  shift_template_id TEXT NOT NULL,
  day TEXT NOT NULL CHECK(day IN ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')),
  FOREIGN KEY (shift_template_id) REFERENCES shift_templates(id) ON DELETE CASCADE,
  UNIQUE(shift_template_id, day)
);

-- Required roles per shift (with count)
CREATE TABLE shift_template_roles (
  id TEXT PRIMARY KEY,
  shift_template_id TEXT NOT NULL,
  role_id TEXT NOT NULL,
  min_count INTEGER DEFAULT 1,   -- How many of this role are needed
  FOREIGN KEY (shift_template_id) REFERENCES shift_templates(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
  UNIQUE(shift_template_id, role_id)
);
```

**Notes:**
- `day` is constrained to valid lowercase day names via CHECK constraint
- Roles are defined per-business — each business creates roles that match their operation
- `shift_template_roles.min_count` specifies how many of each role are needed (e.g., 2 Servers)
- `min_staff` on shift_templates is the overall minimum; role requirements are additive constraints
- All child tables cascade delete when parent is removed

---

## UI Requirements

### Roles Management (`/admin/roles`)

- Simple list of roles for the business
- Add role: text input + "Add" button
- Delete role: click to remove (with confirmation if role is in use)
- Show warning if deleting a role that's assigned to shift templates

### Shift Templates List View (`/admin/shifts`)

- Display all shift templates in a table or card layout
- Show: name, time range, days (as badges), min staff, required roles with counts
- Actions: Edit, Delete
- "Add Shift Template" button

### Add/Edit Shift Template Form

| Field | Type | Validation |
|-------|------|------------|
| Name | Text input | Required, max 50 chars |
| Start Time | Time picker | Required, 24hr format |
| End Time | Time picker | Required, must be after start time |
| Days | Checkboxes (Mon-Sun) | At least one day required |
| Minimum Staff | Number input | Required, min 1 |
| Required Roles | Role + count pairs | Optional, select from business roles |

**Required Roles UI:**
- Dropdown to select a role (from business's roles table)
- Number input for count (default 1)
- "Add another role" button
- Can remove role requirements

**Example:**
```
Required Roles:
[Server ▼] [2] [×]
[Host ▼]   [1] [×]
[+ Add role requirement]
```

### Delete Confirmation

- Simple confirmation modal: "Delete shift template [name]? This cannot be undone."

---

## API Endpoints

### Roles

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/roles` | List all roles for the business |
| POST | `/api/roles` | Create a new role |
| DELETE | `/api/roles/:id` | Delete a role |

### Shift Templates

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/shift-templates` | List all shift templates (with days and roles) |
| POST | `/api/shift-templates` | Create a new shift template |
| GET | `/api/shift-templates/:id` | Get a single shift template (with days and roles) |
| PUT | `/api/shift-templates/:id` | Update a shift template |
| DELETE | `/api/shift-templates/:id` | Delete a shift template |

### Request/Response Examples

**POST /api/roles**
```json
{
  "name": "Host"
}
```

**Response**
```json
{
  "id": "role_abc123",
  "name": "Host",
  "created_at": "2025-01-15T10:30:00Z"
}
```

---

**POST /api/shift-templates**
```json
{
  "name": "Evening",
  "start_time": "18:00",
  "end_time": "23:00",
  "days": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
  "min_staff": 6,
  "required_roles": [
    { "role_id": "role_server", "min_count": 3 },
    { "role_id": "role_host", "min_count": 1 },
    { "role_id": "role_manager", "min_count": 1 }
  ]
}
```

**Response**
```json
{
  "id": "st_abc123",
  "name": "Evening",
  "start_time": "18:00",
  "end_time": "23:00",
  "days": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
  "min_staff": 6,
  "required_roles": [
    { "role_id": "role_server", "role_name": "Server", "min_count": 3 },
    { "role_id": "role_host", "role_name": "Host", "min_count": 1 },
    { "role_id": "role_manager", "role_name": "Manager", "min_count": 1 }
  ],
  "created_at": "2025-01-15T10:30:00Z"
}
```

**Note:** The API accepts/returns `days` and `required_roles` as arrays for convenience. The server handles the join tables internally.

---

## Default Roles

On business creation, seed with common hospitality roles:

- Server
- Manager
- Host
- Chef
- Bartender

Admin can add, rename, or delete these as needed.

---

## Default Shift Templates

On first visit to shift templates, offer to seed with common defaults:

| Name | Start | End | Days | Min Staff | Required Roles |
|------|-------|-----|------|-----------|----------------|
| Morning | 08:00 | 13:00 | Mon-Sun | 2 | — |
| Afternoon | 13:00 | 18:00 | Mon-Sun | 3 | — |
| Evening | 18:00 | 23:00 | Mon-Sun | 5 | — |

Admin can accept defaults and edit, or start from scratch. Required roles left empty for admin to configure.

---

## Edge Cases

1. **Overlapping shifts:** Allowed. Some businesses have overlapping shifts (e.g., "Lunch Rush" 11:00-14:00 overlaps with Morning and Afternoon). The rota generator handles this.

2. **Overnight shifts:** If end_time < start_time, the shift spans midnight (e.g., 22:00-02:00). Store as-is; rota generator interprets correctly.

3. **No shifts defined:** Block rota generation until at least one shift template exists. Show prompt to create shifts.

4. **Deleting a shift with existing rota assignments:** Warn the admin. For MVP, allow deletion — orphaned rota_shifts will need manual cleanup.

5. **Updating days/roles:** When editing, delete all existing `shift_template_days` and `shift_template_roles` rows and re-insert the new selection. Simpler than diffing.

6. **Deleting a role in use:** Warn the admin that the role is assigned to X shift templates. If they proceed, cascade delete removes the role requirements from those shifts.

7. **min_staff vs required_roles:** These are complementary. `min_staff` is the overall minimum. `required_roles` adds constraints like "at least 1 must be a Manager". The sum of `min_count` across roles doesn't have to equal `min_staff`.

---

## Technical Notes

- Use the existing Hono API pattern from availability endpoints
- ID prefixes:
  - Roles: `role_` + nanoid
  - Shift templates: `st_` + nanoid
  - Shift template days: `std_` + nanoid
  - Shift template roles: `str_` + nanoid
- Frontend: React form with controlled inputs
- Validation: Both client-side and server-side
- Use a transaction when creating/updating to ensure all related tables stay in sync

---

## Success Criteria

1. Admin can create, view, edit, and delete roles
2. Admin can create, view, edit, and delete shift templates
3. Shift templates support per-shift role requirements with counts
4. All data persists to D1 database
5. Form validation prevents invalid data (missing fields, end before start, invalid day)
6. UI clearly shows when each shift runs and its staffing requirements

---

## Out of Scope (for now)

- Per-day variations (e.g., different min_staff on weekends) — use separate templates
- Seasonal templates
- Template versioning/history
- Copying templates between businesses
- Role hierarchy or permissions

---

## Next Steps After This

Once shift templates and roles are in place:
1. **Update Staff table** — Link staff members to roles (each staff has a role from the roles table)
2. **Business Rules** — Define scheduling constraints (conflicts, preferences)
3. **Rota Generation** — AI generates draft schedules using availability + templates + rules
