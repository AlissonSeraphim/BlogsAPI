const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;

  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const isValidEmail = validateEmailRegex.test(email);

  if (!isValidEmail || !password) {
 return res.status(mapStatusHTTP('BAD_REQUEST')).json({
    message: 'Some required fields are missing',
  }); 
}

  next();
};

module.exports = {
  validateLoginBody,
};
