const { validateBooking } = require("./booking");

function createBooking(parent, lsa, date) {
  const validation = validateBooking(parent, lsa, date);

  if (validation !== "Booking details are valid") {
    return {
      success: false,
      message: validation,
    };
  }

  return {
    success: true,
    message: "LSA booking confirmed",
  };
}

module.exports = { createBooking };
