//Imports


const pages = {
    home: (req, res) =>{
        try {
            res.status(200).json({ message: 'Welcome to api shop'})
        } catch (error) {
            console.log('Error at home ==> ' + error);
        }
    }
}

module.exports = pages;
