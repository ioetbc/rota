# RotaAI — Product Requirements Document

## Overview

RotaAI is an AI-powered staff scheduling tool for small hospitality and retail businesses. It replaces manual rota building with a natural language workflow: staff submit availability via SMS link, managers define rules through conversational input, and the AI generates a draft rota with transparent reasoning per decision.

**Target customer:** Independent restaurants, cafés, bars, and retail boutiques with 5–40 staff. Manager-operators building rotas manually today, typically in spreadsheets or WhatsApp.

**Price point:** £20–40/month

---

## User Roles

| Role | Description |
|------|-------------|
| Manager/Owner | Defines business rules, shift templates, reviews rotas, sends SOS, overrides shifts |
| Staff Member | Receives SMS, submits availability, receives shift confirmations |

---

## Tech Stack

- **Runtime:** Cloudflare Workers
- **Framework:** Hono
- **Database:** Cloudflare D1 (SQLite)
- **AI:** Anthropic Claude (Haiku for parsing, structured output via tool use)
- **Auth:** Clerk (magic links)
- **SMS:** TBD (Twilio or similar)
- **Frontend:** Bun + React (dev), deployed to Workers

---

## Feature Areas

### F1 — Business Onboarding

Manager sets up their business with:

1. **Basic info:** Business name, timezone
2. **Shift templates:** Define the shift slots that exist (see Shift Model below)
3. **Staff roster:** Import or manually add staff with roles
4. **Business rules:** Free-text brain dump with optional slash command prefixes for structure

#### Slash Commands (Optional Prefixes)

Slash commands provide structure hints to the AI parser while keeping input natural:

```
/preference Millie prefers double shifts because she travels far
/conflict Bill and Rob don't work well together, avoid same shifts
/busy Need two managers on Friday evenings
/minimum Always have at least one chef on kitchen shifts
```

Commands sit alongside free text. The AI extracts rules and classifies each as:
- **Type:** staffing minimum, conflict, preference, role requirement
- **Priority:** hard (never break) or soft (prefer but flexible)

Manager reviews extracted rules as cards — can edit, confirm, or delete each one. Rules can be added or updated at any time.

---

### F2 — Shift Model

Shifts are concrete time slots, not just operating hours.

**shift_templates table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| business_id | uuid | FK to business |
| name | string | "Morning", "Afternoon", "Evening" |
| start_time | time | e.g. "08:00" |
| end_time | time | e.g. "13:00" |
| days | string[] | Which days this shift exists |
| min_staff | integer | Minimum staff required |
| required_roles | string[] | e.g. ["staff", "manager"] |

**Key decisions:**
- "Double shift" is not a type — it's assigning one person to both Morning and Afternoon
- Min staff varies per shift (mornings quiet, evenings busy)
- Each shift template defines its own staffing requirements

---

### F3 — Staff Management

**staff table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| business_id | uuid | FK to business |
| name | string | Full name |
| phone | string | For SMS |
| role | enum | staff, manager, host, chef, cook, dishwasher |
| hourly_rate | decimal | Optional, for cost tracking |
| contracted_hours | integer | 0 for zero-hour contracts |
| status | enum | active, inactive |
| created_at | timestamp | |

---

### F4 — Staff Availability Collection

1. Automated SMS sent to all active staff 7 days before the week (configurable)
2. SMS contains a unique personalized link — no login required
3. Staff land on a single-field page: one free-text box
4. They type naturally: "Free Mon–Wed, Thursday afternoon only, can't do Friday"
5. AI parses response into structured availability slots
6. Staff see parsed result and confirm before submission
7. Non-responses default to unavailable

**availability_submissions table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| staff_id | uuid | FK to staff |
| week_start | date | Monday of the week |
| raw_text | text | Original input |
| created_at | timestamp | |

**availability_slots table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| submission_id | uuid | FK to submission |
| staff_id | uuid | FK to staff |
| date | date | Specific date |
| shift | enum | morning, afternoon, evening |
| available | boolean | |
| ai_reasoning | text | "Explicitly stated 'Thursday afternoon only'" |

**AI parsing approach:**
- Use Anthropic Haiku with tool use for structured output
- Define tool schema matching availability_slots structure
- Include reasoning field for transparency
- Staff confirms parsed result before saving

---

### F5 — Rota Generation

1. Manager triggers draft generation
2. AI cross-references: staff availability, business rules (hard first, then soft), shift templates
3. Hard rules never broken; soft rules applied where possible with notes if skipped
4. Draft rota produced with written reason for every shift assignment

**rotas table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| business_id | uuid | FK to business |
| week_start | date | Monday of the week |
| status | enum | draft, published |
| created_at | timestamp | |
| published_at | timestamp | Nullable |

**rota_shifts table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| rota_id | uuid | FK to rota |
| staff_id | uuid | FK to staff |
| shift_template_id | uuid | FK to shift template |
| date | date | |
| reason | text | AI explanation for assignment |
| is_override | boolean | True if manually assigned |

---

### F6 — Manager Review & Overrides

- Manager can manually reassign any shift
- Can add or remove staff from any slot
- Manual overrides flagged with `is_override = true`
- Warnings shown if override violates a hard rule

---

### F7 — SOS / Gap Filling

1. Manager identifies understaffed shift, triggers SOS
2. System finds eligible staff (available that day, not already assigned)
3. SMS sent: "Can you cover [shift] on [date]? Reply YES or NO"
4. First YES gets the slot (or manager manually assigns)
5. Manager sees responses in real time

**sos_requests table:**

| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| rota_shift_id | uuid | Which shift needs cover |
| contacted_staff | uuid[] | Who was messaged |
| responses | jsonb | { staff_id: "yes"/"no"/null } |
| resolved_by | uuid | Staff who got the shift (nullable) |
| created_at | timestamp | |

---

### F8 — Rota Publishing & Staff Notification

1. Manager publishes final rota
2. Each staff member receives SMS with their shifts only
3. Future: in-app calendar view

---

## Database Schema Summary

```
businesses
├── id, name, timezone, created_at

shift_templates
├── id, business_id, name, start_time, end_time, days[], min_staff, required_roles[]

staff
├── id, business_id, name, phone, role, hourly_rate, contracted_hours, status

business_rules
├── id, business_id, raw_text, rule_type, priority, active, created_at

availability_submissions
├── id, staff_id, week_start, raw_text, created_at

availability_slots
├── id, submission_id, staff_id, date, shift, available, ai_reasoning

rotas
├── id, business_id, week_start, status, created_at, published_at

rota_shifts
├── id, rota_id, staff_id, shift_template_id, date, reason, is_override

sos_requests
├── id, rota_shift_id, contacted_staff[], responses, resolved_by, created_at
```

---

## MVP Phases

### Phase 1: Availability Parsing Proof-of-Concept

**Goal:** Validate that AI can reliably parse free-text availability into structured slots.

**Scope:**
- Simple web form (no auth, no SMS)
- Staff enters free-text availability
- AI parses to structured slots with reasoning
- Staff sees parsed result, can edit, then confirms
- Saved to D1 database

**Data model (minimal):**
- staff (id, name, phone)
- availability_submissions (id, staff_id, raw_text, week_start)
- availability_slots (id, submission_id, staff_id, date, shift, available, ai_reasoning)

**Success criteria:**
- 90%+ of availability correctly parsed on first attempt
- Staff can easily correct any mistakes before confirming

---

### Phase 2: Basic Scheduling

**Scope:**
- Manager auth (Clerk magic links)
- Business setup: shift templates, staff roster, business rules
- Staff submit availability via web
- AI generates draft rota
- Manager reviews, overrides, publishes

---

### Phase 3: SMS + Polish

**Scope:**
- SMS for availability collection
- SMS for rota distribution
- SOS functionality
- Mobile-friendly UI

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Week start | Monday | Industry standard for hospitality |
| Double shifts | Multiple assignments, not enum | Simpler model, AI handles preferences |
| Non-response | Assume unavailable | Safe default, reduces manager burden |
| Auth | Magic links via Clerk | Lowest friction for managers |
| AI model | Haiku | Cheap, fast, sufficient for parsing |
| Structured output | Tool use | Guaranteed schema compliance |

---

## Open Questions (Resolved)

| Question | Resolution |
|----------|------------|
| How are staff added? | Manager imports or adds manually |
| Non-responders? | Default to unavailable |
| Mobile app? | Web + SMS only for MVP |
| Multi-location? | Not in v1 |
| Shift confirmation? | Notification only, no active acceptance |

---

## Risks

1. **SMS costs:** At scale, messaging costs eat into margins. Mitigation: optimize later with WhatsApp/push.
2. **AI parsing accuracy:** Free-text is ambiguous. Mitigation: confirmation step, collect data on accuracy.
3. **Brain dump extraction:** Complex rules may confuse AI. Mitigation: slash commands add structure.
4. **Adoption:** Staff may ignore SMS. Mitigation: clear, simple messaging; manager can chase.

---

## Next Steps

1. Set up Cloudflare Workers + Hono project structure
2. Create D1 schema for Phase 1 tables
3. Build availability submission form (frontend)
4. Implement Anthropic tool use for parsing
5. Build confirmation UI
6. Test with sample inputs, measure accuracy
