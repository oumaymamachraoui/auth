const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
};
module.exports = connect;
