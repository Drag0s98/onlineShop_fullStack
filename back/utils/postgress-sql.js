const { Pool }= require('pg')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_USER,
    process.env.SQL_PASS,{
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
        dialect: 'postgres'
    }
)

module.exports = sequelize;








/* 
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

module.exports = pool; */