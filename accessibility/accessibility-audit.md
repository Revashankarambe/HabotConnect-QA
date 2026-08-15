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

The accessibility review will be performed across the main Parent-LSA booking journey:

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
