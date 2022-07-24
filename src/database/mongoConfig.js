const mongoose = require("mongoose");


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("O banco de dados está conectado.");
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    connect
}