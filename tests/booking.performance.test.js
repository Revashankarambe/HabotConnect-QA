// This test establishes a local execution baseline for the current
// booking logic. It is not intended to represent network or API latency.

const { createBooking } = require("../src/bookingService");

describe("Booking performance", () => {
  test("creates bookings within the expected execution time", () => {
    const start = performance.now();

    for (let i = 0; i < 10000; i++) {
      createBooking("parent-1", "lsa-1", "2026-08-20");
    }

    const duration = performance.now() - start;

    console.log(`Booking execution time: ${duration.toFixed(2)} ms`);

    expect(duration).toBeLessThan(100);
  });
});
