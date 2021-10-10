const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/postgress-sql')

class Manufactures extends Model {}
Manufactures.init({
    manufactures_key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    cif: DataTypes.STRING
}, {
    sequelize,
    modelName: 'manufactures'
})

class Articles extends Model{}
Articles.init({
    article_key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    relevance: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    images: DataTypes.TEXT,
    manufactures_key: DataTypes.INTEGER
},{
    sequelize,
    modelName: 'articles'
})


module.exports = { Manufactures, Articles};