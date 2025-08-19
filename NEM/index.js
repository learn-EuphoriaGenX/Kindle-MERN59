const express = require("express")
let app = express() // instantiate the express class
let dotenv = require('dotenv')
dotenv.config()
let connectDB = require('../NEM/config/db.config')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    return res.send({message: 'Hello World!'})
})

const userRoutes = require('./routes/user.routes')
app.use('/user', userRoutes);
const postRoute =  require('./routes/post.route');
app.use('/post', postRoute);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is listening on port ${process.env.PORT}✅`);

    })
})