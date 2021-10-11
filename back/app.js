//Imports
const express = require('express');
const cors = require('cors')
require('dotenv').config();
require('./utils/postgress-sql');
const sequelize = require('./utils/postgress-sql')
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 6000;

//Middlewares
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', routes);

app.get('*', (req, res) => {
    res.status(400).json({ message: 'A error has occured' })
})

app.listen(port, async () => {
    console.log(`Server working on: ${port}`);
    //Connect to DB
    try {
        //replace .authenticate() for .sync({ force: false }) to add CREATE TABLE IF NOT EXIST <tableName>
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})
