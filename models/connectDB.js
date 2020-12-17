//mongodb+srv://dbUser:3ABJaS4kvCePUmO5@cluster0.lrddk.mongodb.net/test

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log("Successfully connected to DB")
    } catch (error) {
        console.log("Error connecting DB", error)
    }
};

module.exports = connectDB;