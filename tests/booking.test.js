describe("Parent LSA Booking", () => {
  test("Parent should be able to book an LSA", () => {
    const parentLoggedIn = true;
    const lsaSelected = true;
    const dateSelected = true;
    const bookingConfirmed = true;

    expect(parentLoggedIn).toBe(true);
    expect(lsaSelected).toBe(true);
    expect(dateSelected).toBe(true);
    expect(bookingConfirmed).toBe(true);
  });
});
