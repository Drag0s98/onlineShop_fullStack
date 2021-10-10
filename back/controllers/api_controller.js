//Imports
const sql = require('../models/entries')
const { Manufactures, Articles } = require('../models/models')

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
            Articles.findAll().then(articles => {
                res.status(200).json(articles)
            })
        } catch (error) {
            res.status(400).json({ message: error })
        }
    },
    manufacture: async (req, res) => {
        try {
            Manufactures.findAll().then(companies => {
                res.status(200).json(companies)
            })
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

}

module.exports = pages;



