const crypto = require('crypto');

module.exports = (text) =>
  crypto
    .createHash('md5')
    .update(text)
    .digest('hex');
