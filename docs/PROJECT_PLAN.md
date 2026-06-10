# Project Plan

Planning document for Clock In Clock Out.

## Project Overview

Clock In Clock Out is a work timer and billing tracker for freelance development sessions.

The application will help users track billable work sessions, organize time by project or client, record session notes, and calculate totals for billing or invoice preparation.

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
|---|---|
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
|---|---|---|
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