//Imports
const sql = require('../models/entries')

const pages = {
    home: (req, res) => {
        try {
            res.status(200).json({ message: 'Welcome to api shop' })
        } catch (error) {
            res.status(400).json({ message: error })
        }
    },
    products: async (req, res) => {
        try {
            let data = await sql.getProducts()
            res.status(200).json(data.rows)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    },
    manufacture: async (req, res) => {
        try {
            let data = await sql.getManufactures()
            res.status(200).json(data.rows)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

}

module.exports = pages;



