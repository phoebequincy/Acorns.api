module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/acorn'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/acorn'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
