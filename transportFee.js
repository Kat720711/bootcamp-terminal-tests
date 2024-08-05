function transportFee(shift) {
    if (shift === "morning") {
    return "R20";
  } else if (shift === "afternoon") {
    return "R10";
  } else if (shift === "nightshift") {
    return "free";
  } else {
    return "Invalid Shift";
  }
  }

  export default transportFee;