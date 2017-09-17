var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.uname}:${configValues.pwd}@localhost:27017/bookloveDatabase`;
    }
};