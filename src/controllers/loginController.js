const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { userService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const getUserByUsername = async (req, res) => {
  const { email } = req.body;

  const existingEmail = await userService.getUserByEmail(email);

  if (!existingEmail) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: 'Invalid fields',
    }); 
  }

  const { password: _password, ...userWithoutPassword } = existingEmail.dataValues;

  const payload = { data: userWithoutPassword };

  const token = createToken(payload);

  return res.status(mapStatusHTTP('OK')).json({ token });
};

module.exports = {
  getUserByUsername,
};