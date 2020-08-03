const dotenv = require('dotenv');

const config = dotenv.config();

module.exports = {
    env: config.parsed || {},
};
