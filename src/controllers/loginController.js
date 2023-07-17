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

  console.log('existing email', existingEmail.dataValues);

  const { password: _password, ...userWithoutPassword } = existingEmail.dataValues;

  const payload = { data: userWithoutPassword };

  const token = createToken(payload);
  console.log('token aqui:', token);
  console.log('typeof token', typeof token);

  return res.status(mapStatusHTTP('OK')).json({ token });
};

module.exports = {
  getUserByUsername,
};