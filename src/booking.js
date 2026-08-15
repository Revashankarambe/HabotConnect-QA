function validateBooking(parent, lsa, date) {
  if (!parent) {
    return "Parent login required";
  }

  if (!lsa) {
    return "LSA selection required";
  }

  if (!date) {
    return "Booking date required";
  }

  return "Booking details are valid";
}

module.exports = { validateBooking };
