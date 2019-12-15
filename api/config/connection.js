const development = {
  database: 'Subscribeful',
  username: 'babyshark',
  password: 'babyshark',
  host: 'localhost',
  dialect: 'mysql',
  port: 8889
};

const testing = {
  database: 'Subscribeful',
  username: 'babyshark',
  password: 'babyshark',
  host: 'localhost',
  dialect: 'mysql',
  port: 8889
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: 8889 
};

module.exports = {
  development,
  testing,
  production,
};
