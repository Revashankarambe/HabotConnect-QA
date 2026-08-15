const { createBooking } = require("../src/bookingService");

describe("LSA Booking Integration", () => {
  test("should create a booking for valid details", () => {
    const result = createBooking(true, true, true);

    expect(result.success).toBe(true);
    expect(result.message).toBe("LSA booking confirmed");
  });

  test("should not create booking when parent is not logged in", () => {
    const result = createBooking(false, true, true);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Parent login required");
  });

  test("should not create booking when LSA is not selected", () => {
    const result = createBooking(true, false, true);

    expect(result.success).toBe(false);
    expect(result.message).toBe("LSA selection required");
  });
});
