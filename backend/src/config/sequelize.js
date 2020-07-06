const TIMEZONE_AMERICA_SAO_PAULO = 'America/Sao_Paulo';

if (!process.env.DB_HOST) {
    // eslint-disable-next-line global-require
    require('dotenv').config();
  }

module.exports = {
    development: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
        },
        timezone: TIMEZONE_AMERICA_SAO_PAULO,
    },
    prod: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
            useUTC: false,
            dateStrings: true,
            typeCast: true,
        },
        timezone: TIMEZONE_AMERICA_SAO_PAULO,
      },
  };