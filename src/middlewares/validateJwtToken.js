const { getPayload } = require('../auth/authFunctions');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateJwt = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(mapStatusHTTP('UNAUTHORIZED')).json({
        message: 'Token not found',
      });
    }

    const removeBearer = authorization.replace('Bearer ', '');

    const payload = getPayload(removeBearer);

    req.payload = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJwt;