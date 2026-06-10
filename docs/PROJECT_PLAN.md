# Project Plan

Planning document for Clock In Clock Out.

## Project Overview

Clock In Clock Out is a work timer and billing tracker for freelance development sessions.

The application will help users track billable work sessions, organize time by project or client, record session notes, and calculate totals for billing or invoice preparation.

## Project Blueprint

Clock In Clock Out is a freelance work timer and billing tracker designed for developers who need a simple way to track billable work sessions.

The project focuses on a practical workflow: clock in, work, add notes, clock out, and review billable time. The app is intended to start as a clean backend-focused portfolio project and later grow into a simple dashboard-driven tool.

## Product Concept

The application will allow a user to start and stop work sessions, track how long each session lasted, associate sessions with projects or clients, and calculate estimated billing totals.

The first version will focus on reliable session tracking and clear project documentation. Later versions can add dashboard views, reporting, exports, authentication, and invoice support.

## Target User

The primary user is a freelance developer, student developer, or independent technical worker who wants to track work sessions without needing a full invoicing platform.

Example use cases:

- Tracking time spent on client projects
- Recording development session notes
- Reviewing weekly billable hours
- Estimating invoice totals
- Building a documented portfolio backend project

## Core User Workflow

The basic workflow is:

1. User starts a work session.
2. User works on a project or client task.
3. User optionally adds notes to the session.
4. User stops the session.
5. App calculates the session duration.
6. App stores the completed session.
7. User reviews session history and billing totals.

## MVP Scope

The minimum viable product should include:

- Basic backend API
- Health check route
- Work session creation
- Start session logic
- Stop session logic
- Session duration calculation
- Session list endpoint
- Session detail endpoint
- Basic billing summary endpoint
- Local database persistence
- Clear README and API documentation

## Out of Scope for MVP

The first version does not need:

- Full authentication
- Payment processing
- Real invoice generation
- Multi-user accounts
- Cloud deployment
- Advanced charts
- Mobile app support

These features can be added later after the core timer and billing workflow works reliably.

## Initial Architecture Direction

The project will likely use a backend-first architecture.

Planned direction:

- Backend API for work session management
- Local database for session storage
- Versioned API routes
- Documentation-first development
- Simple dashboard or frontend later

Possible stack direction:

- Node.js / NestJS or another backend framework
- SQLite for local persistence
- REST-style API routes
- Markdown documentation
- GitHub releases for version checkpoints

## Portfolio Value

This project demonstrates practical backend development skills through:

- API design
- Data modeling
- Time and duration calculation
- CRUD operations
- Local database persistence
- Documentation quality
- Version tracking
- Project planning
- Portfolio-ready GitHub presentation

The project is intentionally simple in concept but useful enough to show real-world development thinking. Tiny app, real backend muscles. Annoyingly effective.

## Build Strategy

The project should be built in small sessions:

1. Documentation foundation
2. Project blueprint
3. Backend initialization
4. Data model setup
5. Session API
6. Billing summary
7. Dashboard or output layer
8. Testing and verification
9. README polish
10. Release checkpoint

## Session 1.5 Completion Criteria

Session 1.5 is complete when:

| Check | Status |
| --- | ---: |
| Project blueprint added | Pending |
| MVP scope documented | Pending |
| User workflow documented | Pending |
| Architecture direction documented | Pending |
| Portfolio value documented | Pending |
| Changes committed | Pending |
| Working tree clean | Pending |

## Project Goals

- Track freelance work sessions
- Record start and stop times
- Store completed session history
- Support notes for each session
- Organize work by client or project
- Calculate billable time totals
- Estimate billing amounts
- Provide a simple dashboard or API output
- Build a portfolio-ready backend project with clean documentation

## Core Features

### Session Tracking

The app should allow a user to:

- Start a work session
- Stop a work session
- View the active session
- Review completed sessions
- Add notes to a session

### Billing Support

The app should support:

- Hourly rate tracking
- Total time calculation
- Estimated invoice totals
- Billable versus non-billable session marking

### Project and Client Organization

The app should eventually support:

- Project names
- Client names
- Session grouping by project
- Session grouping by client

### Dashboard or API Output

The app should eventually display:

- Active session status
- Total time worked
- Recent sessions
- Billing summary
- Project/client breakdown

## Planned Data Model

Possible core records:

### Work Session

| Field | Purpose |
| --- | --- |
| `id` | Unique session identifier |
| `projectName` | Project associated with the session |
| `clientName` | Client associated with the session |
| `startTime` | Session start timestamp |
| `endTime` | Session end timestamp |
| `durationMinutes` | Total completed session duration |
| `hourlyRate` | Billing rate for the session |
| `billable` | Whether the session counts toward billing |
| `notes` | Optional session notes |
| `createdAt` | Record creation timestamp |
| `updatedAt` | Record update timestamp |

## Possible API Endpoints

Future API routes may include:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/` | Health check |
| `POST` | `/api/v1/sessions/start` | Start a new work session |
| `PATCH` | `/api/v1/sessions/:id/stop` | Stop an active session |
| `GET` | `/api/v1/sessions` | List work sessions |
| `GET` | `/api/v1/sessions/:id` | Get one work session |
| `PATCH` | `/api/v1/sessions/:id` | Update a work session |
| `DELETE` | `/api/v1/sessions/:id` | Delete a work session |
| `GET` | `/api/v1/summary` | View time and billing summary |

## Development Phases

### Phase 1 — Repository Foundation

- Create GitHub repository
- Clone repository locally
- Add starter documentation
- Add `.gitignore`
- Commit initial project foundation

### Phase 2 — Backend Foundation

- Initialize backend project
- Add environment configuration
- Add basic health route
- Add project structure
- Add development scripts

### Phase 3 — Work Session Model

- Define session data model
- Add database configuration
- Add migration or schema setup
- Add session persistence

### Phase 4 — Session API

- Add start session endpoint
- Add stop session endpoint
- Add list sessions endpoint
- Add detail session endpoint
- Add update/delete support

### Phase 5 — Billing Summary

- Add duration calculation
- Add hourly rate support
- Add billable time totals
- Add summary endpoint

### Phase 6 — Dashboard / Portfolio Polish

- Add simple dashboard or frontend output
- Add screenshots
- Improve README
- Add API reference
- Add development status documentation
- Prepare repository for portfolio review

## Current Version

```text
v0.1.0