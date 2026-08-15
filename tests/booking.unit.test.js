const { validateBooking } = require("../src/booking");

describe("Booking Validation", () => {
  test("should accept valid booking details", () => {
    const result = validateBooking(true, true, true);

    expect(result).toBe("Booking details are valid");
  });

  test("should reject booking when parent is not logged in", () => {
    const result = validateBooking(false, true, true);

    expect(result).toBe("Parent login required");
  });

  test("should reject booking when LSA is not selected", () => {
    const result = validateBooking(true, false, true);

    expect(result).toBe("LSA selection required");
  });

  test("should reject booking when date is missing", () => {
    const result = validateBooking(true, true, false);

    expect(result).toBe("Booking date required");
  });
});
