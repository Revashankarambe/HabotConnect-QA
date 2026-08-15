# E2E Testing – HabotConnect Parent-LSA Booking Journey

## 1. Objective

The purpose of End-to-End testing is to validate the complete Parent-LSA booking journey from login through successful booking confirmation.

The test validates that the major user actions work together as one complete flow.

## 2. Selected E2E Framework

**Maestro** is selected for the mobile End-to-End test flow.

Maestro is suitable for this project because the booking journey can be expressed as simple user actions such as:

* Launching the application
* Tapping controls
* Entering text
* Selecting an LSA
* Selecting booking details
* Confirming the booking
* Verifying the booking result

The test flow is maintained in:

`e2e/booking-flow.yaml`

## 3. Parent-LSA Booking Flow

The automated flow covers:

```text
Launch Application
        ↓
Parent Login
        ↓
Search for LSA
        ↓
Select LSA
        ↓
Select Date
        ↓
Select Time
        ↓
Book LSA
        ↓
Verify "Booking Successful"
```

## 4. Test Scenario

### Test Case: Parent successfully books an LSA

**Precondition:**

* The HabotConnect Parent application is available.
* A valid parent test account is available.
* An LSA named "John" is available for selection.
* Booking date and time are available.

**Test Steps:**

1. Launch the HabotConnect Parent application.
2. Tap Login.
3. Enter the parent email.
4. Enter the parent password.
5. Tap Sign In.
6. Open LSA Search.
7. Search for "John".
8. Select the LSA.
9. Select the booking date.
10. Select the booking time.
11. Tap Book LSA.
12. Verify that "Booking Successful" is displayed.

**Expected Result:**

The parent should be able to complete the booking successfully and the application should display the booking confirmation.

## 5. Test Assertions

The E2E test verifies the final booking outcome using:

`assertVisible: "Booking Successful"`

The assertion ensures that the complete booking flow reaches the expected successful state.

## 6. Test Data

The current test flow uses controlled test data:

* Parent email: `parent@test.com`
* Parent password: `Test@123`
* LSA search value: `John`

Test credentials should only be used in a controlled test environment and should not contain production credentials.

## 7. Execution

The E2E flow is stored as:

`e2e/booking-flow.yaml`

The flow is designed to be executed against a test build of the HabotConnect Parent mobile application.

The application identifier configured in the flow is:

`com.habotconnect.parent`

## 8. CI/CD Integration Approach

The current GitHub Actions pipeline executes the Node.js automated QA tests.

The E2E layer is kept separately because Maestro requires a mobile application build and a compatible mobile execution environment.

The intended CI/CD architecture is:

```text
Code Push / Pull Request
          ↓
GitHub Actions
          ↓
Install Dependencies
          ↓
Lint
          ↓
Unit Tests
          ↓
Integration Tests
          ↓
Mobile Build Available
          ↓
Maestro E2E Tests
          ↓
Test Report
          ↓
Release Decision
```

## 9. E2E Failure Handling

An E2E failure should be investigated using:

* Failed test step
* Application logs
* Screen recording or screenshot
* Test device information
* Application build version
* Test data
* Reproduction result

A failed critical booking journey should block release until the issue is investigated and re-tested.

## 10. Current Scope and Limitation

The repository contains the Maestro E2E flow for the Parent-LSA booking journey.

Actual execution requires a compatible HabotConnect Parent mobile application build with the configured application identifier.

Therefore, the E2E flow is maintained as the automated test definition until the required mobile build and execution environment are available.

## 11. Acceptance Criteria

The E2E test is considered successful when:

* The application launches successfully.
* Parent login succeeds.
* LSA search works.
* The intended LSA can be selected.
* Booking date and time can be selected.
* The booking can be submitted.
* "Booking Successful" is displayed.
* No blocking error occurs during the journey.
