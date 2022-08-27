const {pool, Pool} = require('pg')

const dbPool = new Pool({
    database: 'Web',
    port: 5432,
    user: 'postgres',
    password: '123456'
})

module.exports = dbPool