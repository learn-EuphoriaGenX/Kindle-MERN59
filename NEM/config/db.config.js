let mongoose = require('mongoose')


let connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Connected to MongoDB✅')
    } catch (error) {
        console.log('Error connecting to MongoDB❌')
    }
}

module.exports = connectDB