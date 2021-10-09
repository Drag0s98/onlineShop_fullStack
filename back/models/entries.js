const pool = require('../utils/postgress-sql');


const entries = {

    getProducts: async () => {
        let result;

        try {
            sql_query = (`
            SELECT name, relevance, price, images, manufactures_key FROM articles;
            `)
            result = await pool.query(sql_query)
        } catch (error) {
            console.log('Error in getProducts ==> ' + error);
        }
        return result;
    },
    getManufactures: async () => {
        let result;
        try {
            sql_query = (`
           SELECT name, direction, cif FROM public.manufactures;
           `)
            result = await pool.query(sql_query)
        } catch (error) {
            console.log('Error in getManufactures ==> ' + error);
        }
        return result;
    }
}

module.exports = entries;