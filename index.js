function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    // Lock account after more than 3 attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Successful login
    if (
      passwordAttempt === userInfo.password &&
      attemptCount < 3
    ) {
      return "Login successful";
    }

    // Failed login attempts
    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};