const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateDisplayName = (displayName) => (displayName.length > 7);

const validateEmail = (email) => {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const isValidEmail = validateEmailRegex.test(email);

  return isValidEmail;
};

const validatePassword = (password) => password.length > 5;

const validateUserEntries = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (!validateDisplayName(displayName)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!validateEmail(email)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"email" must be a valid email',
    });
  }

  if (!validatePassword(password)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = {
  validateUserEntries,
};
