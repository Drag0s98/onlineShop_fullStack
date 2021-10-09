const { Pool }= require('pg')

const pool = new Pool({
    host: process.env.SQL_HOST ,
    database: process.env.SQL_DB, 
    user: process.env.SQL_USER, 
    password: process.env.SQL_PASS,
    port: process.env.SQL_PORT,
})
pool.connect();

pool.on('connect', () => {
    console.log('SQL Connected');
})

module.exports = pool;