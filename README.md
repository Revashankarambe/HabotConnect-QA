# HabotConnect QA – Mobile Quality Assurance Project

**Full Legal Name:** Revashankar Ambe
**Email:** revashankarambe@gmail.com
**Phone:** 9770234866

---

## Project Overview

This repository contains the Quality Assurance implementation for the HabotConnect Parent-LSA mobile application.

The project focuses on building a mobile-first quality strategy covering automated testing, accessibility, performance validation, and Continuous Integration/Continuous Delivery.

The primary user journey covered in this project is the Parent-LSA booking flow.

---

## Project Objectives

The project aims to:

* Establish automated testing coverage for the booking journey.
* Validate unit and integration behaviour.
* Define an End-to-End mobile testing approach.
* Establish an accessibility audit process based on Web Content Accessibility Guidelines 2.1 and 2.2 Level AA.
* Measure local booking execution performance.
* Enforce code quality through linting.
* Integrate automated quality checks into GitHub Actions.
* Maintain a clear and repeatable QA process.

---

## QA Architecture

```text
Parent-LSA Booking Journey
          |
          +--------------------+
          |                    |
          v                    v
     Unit Testing       Integration Testing
          |                    |
          +---------+----------+
                    |
                    v
             Performance Test
                    |
                    v
             Accessibility
                    |
                    v
              E2E / Maestro
                    |
                    v
             GitHub Actions
                    |
                    v
             Release Decision
```

---

## Testing Coverage

### Unit Testing

Unit tests validate individual booking-related functions and business logic.

Location:

```text
tests/booking.unit.test.js
```

### Integration Testing

Integration testing validates interaction between booking-related components and services.

Location:

```text
tests/booking.integration.test.js
```

### Booking Test

The booking test validates the expected booking behaviour.

Location:

```text
tests/booking.test.js
```

### Performance Testing

The performance test establishes a local execution baseline for the booking logic.

It executes:

```text
10,000 booking operations
```

and verifies that execution remains below the defined threshold.

Location:

```text
tests/booking.performance.test.js
```

Latest local baseline:

```text
10,000 operations completed in 0.93 ms
```

> This measurement represents local booking logic execution time. It does not represent network, database, or API latency.

---

## End-to-End Testing

The project uses a Maestro-style mobile E2E flow for the Parent-LSA booking journey.

The flow covers:

```text
Launch Application
        ↓
Parent Login
        ↓
LSA Search
        ↓
LSA Selection
        ↓
Select Date
        ↓
Select Time
        ↓
Book LSA
        ↓
Booking Successful
```

E2E flow:

```text
e2e/booking-flow.yaml
```

E2E documentation:

```text
e2e/E2E_TESTING.md
```

The configured application identifier is:

```text
com.habotconnect.parent
```

Actual E2E execution requires a compatible HabotConnect Parent mobile application build and mobile execution environment.

---

## Accessibility Testing

The accessibility audit covers the main Parent-LSA booking journey:

1. Parent Login
2. LSA Search
3. LSA Profile Selection
4. Booking Details
5. Booking Confirmation

The audit focuses on relevant WCAG 2.1 and 2.2 Level AA accessibility areas, including:

* Accessible names and roles
* Screen reader announcements
* Focus order
* Keyboard accessibility where supported
* Text scaling
* Colour contrast
* Non-colour indicators
* Touch target usability
* Form labels
* Validation and error messages
* Assistive technology compatibility

Tools considered:

* Android Accessibility Scanner
* TalkBack
* VoiceOver
* Accessibility Inspector

Accessibility documentation:

```text
accessibility/accessibility-audit.md
```

Critical accessibility defects should be fixed and successfully re-tested before release.

---

## Code Quality

ESLint is used to enforce JavaScript code quality.

Local command:

```bash
npm run lint
```

The lint check is also executed through GitHub Actions.

---

## Local Test Execution

Install project dependencies:

```bash
npm install
```

Run the automated test suite:

```bash
npm test
```

Run linting:

```bash
npm run lint
```

---

## Continuous Integration / Continuous Delivery

The project uses GitHub Actions to automatically execute QA checks for pushes and pull requests targeting the `main` branch.

Workflow:

```text
Code Push / Pull Request
          ↓
Checkout Repository
          ↓
Configure Node.js
          ↓
Install Dependencies
          ↓
Run ESLint
          ↓
Run Unit & Integration Tests
          ↓
QA Result
```

Workflow configuration:

```text
.github/workflows/ci.yml
```

A successful workflow requires the dependency installation, linting and automated tests to complete successfully.

---

## Git Hooks

Husky is configured as part of the project quality workflow.

The project uses the following preparation script:

```text
prepare: husky
```

This supports local Git-based quality enforcement before changes are integrated into the repository.

---

## Project Structure

```text
HabotConnect-QA/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── accessibility/
│   └── accessibility-audit.md
│
├── e2e/
│   ├── booking-flow.yaml
│   └── E2E_TESTING.md
│
├── src/
│   └── bookingService.js
│
├── tests/
│   ├── booking.test.js
│   ├── booking.unit.test.js
│   ├── booking.integration.test.js
│   └── booking.performance.test.js
│
├── .husky/
├── package.json
├── package-lock.json
└── README.md
```

---

## Current Test Result

The current automated test suite contains:

```text
Test Suites: 4 passed
Tests:       9 passed
```

The performance baseline also passed:

```text
10,000 operations completed in 0.93 ms
```

The GitHub Actions QA pipeline is currently passing successfully.

---

## Quality Gates

The project uses the following quality gates:

* Automated tests must pass.
* ESLint must pass.
* Performance baseline must remain within the defined threshold.
* Critical accessibility issues must be resolved and re-tested.
* Critical E2E booking failures should block release when the required mobile execution environment is available.

---

## Limitations

The current performance measurement represents local booking logic execution and should not be interpreted as real-world network or API latency.

The E2E flow requires a compatible mobile application build and execution environment for actual device-level execution.

The accessibility audit defines the testing methodology and required checks across Android and iOS assistive technologies.

---

## Repository Purpose

This repository demonstrates a structured Quality Assurance approach for the HabotConnect Parent-LSA mobile booking journey, combining functional testing, integration testing, performance validation, accessibility planning, E2E automation and CI/CD quality enforcement.
