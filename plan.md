# RotaAI Phase 1 MVP - Implementation Plan

## Overview

RotaAI is an AI-powered staff scheduling tool. Phase 1 is a proof-of-concept focused on validating that AI can reliably parse free-text availability into structured slots.

**Goal:** Staff submit availability in natural language, AI parses it to structured slots, staff confirm before saving.

**Success Criteria:**
- 90%+ of availability correctly parsed on first attempt
- Staff can easily correct any mistakes before confirming

---

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Next.js 14+ (App Router) |
| Database | PostgreSQL (Neon cloud) |
| ORM | Prisma |
| AI | Anthropic Claude Haiku |
| Styling | Tailwind CSS |
| Linting | Biome |
| Language | TypeScript |

---

## Implementation Steps

### Step 1: Project Initialization

- [ ] Create new Next.js project with App Router
- [ ] Configure TypeScript (strict mode)
- [ ] Install and configure Tailwind CSS
- [ ] Install and configure Biome for linting/formatting
- [ ] Set up project structure
- [ ] Remove existing Cloudflare/Hono/Vite setup

### Step 2: Database Setup

- [ ] Create Neon PostgreSQL database
- [ ] Install Prisma and initialize
- [ ] Create schema with `Staff`, `AvailabilitySubmission`, `AvailabilitySlot` models
- [ ] Run migrations
- [ ] Create seed script with 8 test staff members:
  - Sarah Johnson
  - Tom Williams
  - Emma Davis
  - James Brown
  - Lucy Taylor
  - Mike Wilson
  - Amy Clark
  - Chris Martin

### Step 3: Environment Configuration

- [ ] Configure `.env.local`:
  - `DATABASE_URL` (Neon connection string)
  - `ANTHROPIC_API_KEY`
- [ ] Create `.env.example` template
- [ ] Ensure `.env.local` is in `.gitignore`

### Step 4: AI Parsing Service

- [ ] Install `@anthropic-ai/sdk`
- [ ] Create `lib/ai/parseAvailability.ts`
- [ ] Implement Claude Haiku with tool use:
  - Tool name: `parse_availability`
  - Tool schema outputs array of slots with date, shift, available, reasoning
- [ ] Handle week context (pass Monday date to AI)
- [ ] Default behavior: unmentioned slots = unavailable
- [ ] Add error handling for API failures

### Step 5: API Routes

- [ ] `GET /api/staff` - Return all staff for selection
- [ ] `POST /api/availability/parse` - Send raw text to AI, return parsed slots (no save)
- [ ] `POST /api/availability/submit` - Save confirmed submission + slots to DB
- [ ] `GET /api/submissions` - List all submissions (admin view)

### Step 6: Staff Selection Page (`/submit`)

- [ ] Grid of staff cards showing name
- [ ] Click to navigate to `/submit/[staffId]`
- [ ] Loading state while fetching staff
- [ ] Simple, clean design

### Step 7: Availability Form (`/submit/[staffId]`)

- [ ] Display staff name at top
- [ ] Week picker (defaults to upcoming Monday)
- [ ] Large textarea with placeholder examples:
  - "Free Mon-Wed, Thursday afternoon only, can't do Friday"
- [ ] "Parse My Availability" button
- [ ] Loading state during AI processing
- [ ] On success: redirect to confirm page with parsed data

### Step 8: Confirmation Page (`/submit/[staffId]/confirm`)

- [ ] Display week dates clearly (Mon 14th - Sun 20th)
- [ ] 7-day x 3-shift grid showing:
  - Green cells = available
  - Red cells = unavailable
  - AI reasoning tooltip/popover on each cell
- [ ] Toggle buttons to flip any slot
- [ ] Track which slots were edited vs AI-parsed
- [ ] "Confirm & Submit" button
- [ ] "Go Back" to re-enter text

### Step 9: Success Page (`/submit/[staffId]/success`)

- [ ] Confirmation message
- [ ] Summary of submitted availability
- [ ] "Submit Another" button to return to staff selection

### Step 10: Admin Submissions View (`/admin/submissions`)

- [ ] Table of all submissions
- [ ] Columns: Staff Name, Week, Submitted At, Raw Text
- [ ] Expandable row to see parsed slots
- [ ] Basic filtering (optional)

### Step 11: Error Handling

- [ ] API error states with user-friendly messages
- [ ] Fallback UI if AI parsing fails
- [ ] Loading spinners/skeletons
- [ ] Form validation

### Step 12: Mobile Responsiveness

- [ ] Test on mobile viewport
- [ ] Touch-friendly toggle buttons
- [ ] Responsive grid layout

### Step 13: Testing & Validation

- [ ] Create test inputs document with expected outputs
- [ ] Manual testing with varied natural language inputs
- [ ] Track accuracy rate
- [ ] Fix parsing issues by adjusting prompts

---

## Database Schema (Prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Staff {
  id          String   @id @default(cuid())
  name        String
  phone       String
  createdAt   DateTime @default(now())
  submissions AvailabilitySubmission[]
  slots       AvailabilitySlot[]
}

model AvailabilitySubmission {
  id        String   @id @default(cuid())
  staffId   String
  staff     Staff    @relation(fields: [staffId], references: [id])
  weekStart DateTime
  rawText   String
  createdAt DateTime @default(now())
  slots     AvailabilitySlot[]
}

model AvailabilitySlot {
  id           String   @id @default(cuid())
  submissionId String
  submission   AvailabilitySubmission @relation(fields: [submissionId], references: [id], onDelete: Cascade)
  staffId      String
  staff        Staff    @relation(fields: [staffId], references: [id])
  date         DateTime
  shift        ShiftType
  available    Boolean
  aiReasoning  String?
}

enum ShiftType {
  MORNING
  AFTERNOON
  EVENING
}
```

---

## File Structure

```
rota-ai/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Redirect to /submit
│   ├── globals.css
│   ├── submit/
│   │   ├── page.tsx                # Staff selection
│   │   └── [staffId]/
│   │       ├── page.tsx            # Availability form
│   │       ├── confirm/
│   │       │   └── page.tsx        # Review & confirm
│   │       └── success/
│   │           └── page.tsx        # Success message
│   ├── admin/
│   │   └── submissions/
│   │       └── page.tsx            # All submissions
│   └── api/
│       ├── staff/
│       │   └── route.ts
│       ├── availability/
│       │   ├── parse/
│       │   │   └── route.ts
│       │   └── submit/
│       │       └── route.ts
│       └── submissions/
│           └── route.ts
├── components/
│   ├── StaffCard.tsx
│   ├── WeekPicker.tsx
│   ├── AvailabilityTextarea.tsx
│   ├── SlotGrid.tsx
│   ├── SlotCell.tsx
│   └── SubmissionTable.tsx
├── lib/
│   ├── ai/
│   │   ├── parseAvailability.ts
│   │   └── toolSchema.ts
│   ├── db.ts                       # Prisma client singleton
│   ├── dates.ts                    # Date utilities
│   └── types.ts                    # Shared types
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── .env.local
├── .env.example
├── biome.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## AI Tool Schema

```typescript
const parseAvailabilityTool = {
  name: "parse_availability",
  description: "Parse natural language availability into structured slots for a given week. For any day/shift not explicitly mentioned, mark as unavailable.",
  input_schema: {
    type: "object",
    properties: {
      slots: {
        type: "array",
        description: "All 21 slots for the week (7 days x 3 shifts)",
        items: {
          type: "object",
          properties: {
            date: {
              type: "string",
              description: "ISO date YYYY-MM-DD"
            },
            shift: {
              type: "string",
              enum: ["MORNING", "AFTERNOON", "EVENING"]
            },
            available: {
              type: "boolean"
            },
            reasoning: {
              type: "string",
              description: "Brief explanation of why this slot was marked available/unavailable"
            }
          },
          required: ["date", "shift", "available", "reasoning"]
        }
      }
    },
    required: ["slots"]
  }
}
```

---

## AI Prompt Strategy

System prompt will include:
- The week's dates (Monday through Sunday)
- Shift definitions: Morning (08:00-13:00), Afternoon (13:00-18:00), Evening (18:00-23:00)
- Instructions to mark unmentioned slots as unavailable
- Examples of natural language inputs and expected outputs

Example inputs to handle:
- "Free all week" → all 21 slots available
- "Monday and Tuesday only" → 6 slots available, 15 unavailable
- "Can't do evenings" → 14 slots available, 7 unavailable
- "Thursday afternoon, Friday morning" → 2 slots available, 19 unavailable
- "Available except Wednesday" → 18 slots available, 3 unavailable
- "Free Mon-Wed, Thursday afternoon only, can't do Friday" → mixed

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@anthropic-ai/sdk": "^0.24.0",
    "@prisma/client": "^5.14.0"
  },
  "devDependencies": {
    "prisma": "^5.14.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@biomejs/biome": "^1.7.0",
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0"
  }
}
```

---

## Biome Configuration

```json
{
  "$schema": "https://biomejs.dev/schemas/1.7.0/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab",
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "asNeeded"
    }
  }
}
```

---

## Risk Mitigations

| Risk | Mitigation |
|------|------------|
| AI parsing accuracy < 90% | Iterative prompt engineering, collect failure cases |
| Ambiguous input | Show AI reasoning so staff understand interpretation |
| API costs | Claude Haiku is cheap (~$0.25/1M input tokens) |
| Neon cold starts | Acceptable for MVP, revisit if needed |

---

## Out of Scope for Phase 1

- Authentication/authorization
- SMS integration
- Shift templates
- Business rules
- Rota generation
- Multi-business support
- Mobile app
- Manager role
- SOS/gap filling

---

## Phase 2 Preview (Future)

After Phase 1 validation:
- Manager auth (Clerk magic links)
- Business setup: shift templates, staff roster, business rules
- AI rota generation with reasoning
- Manager review and overrides
- Rota publishing

---

## Test Cases for AI Parsing

| Input | Expected Available Slots |
|-------|-------------------------|
| "Free all week" | All 21 |
| "Monday only" | Mon M/A/E (3) |
| "Mornings only" | All 7 mornings |
| "Can't do Friday" | 18 (exclude Fri) |
| "Tuesday and Thursday afternoons" | Tue A, Thu A (2) |
| "Available except evenings" | 14 (M/A only) |
| "Free Mon-Wed" | 9 (Mon/Tue/Wed all) |
| "Thursday afternoon, Friday all day" | Thu A, Fri M/A/E (4) |
| "" (empty) | 0 (all unavailable) |
| "whenever" | All 21 (interpret as fully available) |
