//Imports
const express = require('express');
require('dotenv').config();
require('./utils/postgress-sql');
const routes = require ('./routes/routes');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', routes);

app.get('*', (req,res) => {
    res.status(400).json({ message: 'A error has occured'})
})

app.listen(port, () => {
    console.log(`Server working on: ${port}`);
})
