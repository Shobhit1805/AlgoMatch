const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://ShobhitJain:BRLSIOsvmY2fwjXP@cluster0.etempao.mongodb.net/"
    );
    };

    connectDB().then(() => {
    console.log("Database connection established...");
    }).catch((err) => {
    console.error("Database cannot be connected!!");
    }
    );

module.exports = connectDB;