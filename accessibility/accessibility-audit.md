# Accessibility Review

The booking journey should remain usable for parents who rely on
assistive technologies. I will review the login, LSA search,
profile selection and booking screens against WCAG 2.1 Level AA.

## What I will verify

- Text remains readable with increased font size.
- Important actions are understandable without relying only on colour.
- Login and booking fields have meaningful labels.
- Screen readers announce buttons and validation messages correctly.
- Focus moves through the booking flow in a logical order.
- Interactive controls are large enough to use comfortably.

## Tools

I will use Android Accessibility Scanner and TalkBack for Android
checks. VoiceOver and Accessibility Inspector will be used for
iOS-specific checks.

## Release condition

Any critical accessibility issue found in the booking journey
should be fixed and re-tested before considering the flow ready
for release.

## Test Evidence

The accessibility review will be performed across the main Parent-LSA
booking journey:

1. Parent login
2. LSA search
3. LSA profile selection
4. Booking details
5. Booking confirmation

For each screen, I will verify:

- Accessible name and role for interactive elements
- Screen reader announcements
- Logical focus/navigation order
- Text scaling and readability
- Colour contrast and non-colour indicators
- Touch target usability
- Validation and error message announcements

Critical accessibility defects will be fixed and re-tested before release.

## Accessibility Audit Steps

### 1. Automated Accessibility Scan

Run Android Accessibility Scanner on each screen of the Parent-LSA
booking journey.

Check for:

- Missing or unclear content descriptions
- Insufficient colour contrast
- Small touch targets
- Missing labels
- Text scaling problems

Record each finding with screen name, issue, severity and expected behaviour.

### 2. Screen Reader Testing

Enable TalkBack on Android and VoiceOver on iOS.

Navigate through the complete booking journey without looking at the screen.

Verify that:

- Buttons announce their purpose clearly
- Form fields announce their labels
- Selected LSA information is announced correctly
- Validation errors are announced
- Booking confirmation is announced
- Focus moves in a logical order

### 3. Visual and Text Checks

Verify the booking journey with increased system font size.

Check:

- Text does not overlap
- Important information remains visible
- Buttons remain usable
- No information is communicated by colour alone
- Text and controls remain understandable

### 4. Keyboard and Focus Checks

Where keyboard navigation is supported, move through interactive elements
using keyboard navigation.

Verify:

- Focus is visible
- Focus order is logical
- No interactive element is skipped
- Focus does not become trapped

### 5. Mobile Touch Target Checks

Check all primary actions such as:

- Search
- Select LSA
- Continue
- Book
- Confirm

Verify that controls are large enough and have sufficient spacing for
comfortable interaction.

### 6. Validation and Error Checks

Enter invalid or incomplete booking information.

Verify that:

- Errors are clearly identified
- Error messages explain how to correct the issue
- Errors are not communicated only through colour
- Screen readers announce important validation errors

## WCAG 2.1 / 2.2 AA Focus Areas

The audit will focus on:

- Perceivable content
- Operable controls
- Understandable forms and navigation
- Robust compatibility with assistive technologies
- Colour contrast
- Text resizing
- Keyboard accessibility
- Accessible names and labels
- Focus visibility and order
- Error identification and recovery

## Defect Handling

Each accessibility defect will contain:

- Screen or feature
- Accessibility issue
- WCAG requirement
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Evidence
- Retest status

Critical accessibility defects will block release until they are fixed
and successfully re-tested.
