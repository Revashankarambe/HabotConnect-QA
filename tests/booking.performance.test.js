// This test establishes a local execution baseline for the current
// booking logic. It is not intended to represent network or API latency.
const { createBooking } = require("../src/bookingService");

describe("Booking performance", () => {
  test("creates 10,000 bookings within the expected execution time", () => {
    const iterations = 10000;
    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
      createBooking("parent-1", "lsa-1", "2026-08-20");
    }

    const duration = performance.now() - start;

    console.log(
      `Booking performance: ${iterations} operations completed in ${duration.toFixed(2)} ms`,
    );

    expect(duration).toBeLessThan(100);
  });
});
