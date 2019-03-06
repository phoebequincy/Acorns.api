module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/acornsdb'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/acornsdb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
