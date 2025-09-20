const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.UserLogin = async (req, res) => {
    try {
        let { email, password, } = req.body
        if (!email || !password) {
            return res.status(400).send({ message: "Please fill all fields", success: false })
        } else {
            let user = await userModel.findOne({ email: email })
            if (!user) {
                return res.status(400).send({ message: "User not found", success: false })
            } else {
                let isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return res.status(400).send({ message: "Invalid password", success: false })
                }

                let payload = {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: "user",
                    mobile: user.mobile,
                }
                let token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "1h" })


                return res.status(200).send({ message: "Login successful", success: true, token: token, user })
            }
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }

}
module.exports.UserRegister = async (req, res) => {
    try {
        let { name, email, password, mobile, dob } = req.body
        if (!name || !email || !password || !mobile || !dob) {
            return res.status(400).send({ message: "Please fill all fields", success: false })
        } else {
            let existingUser = await userModel.find({ $or: [{ email: email }, { mobile: mobile }] })
            if (existingUser.length > 0) {
                return res.status(400).send({ message: "User already exists", success: false })
            }
            let hassedPassword = await bcrypt.hash(password, 10)
            let newUser = await userModel.create({ name, email, password: hassedPassword, mobile, dob })
            delete newUser._doc.password
            return res.status(200).send({ message: "User created successfully", success: true, data: newUser })
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.profile = async (req, res) => {
    let id = req.user._id
    const token = req.header('Authorization');
    try {
        let user = await userModel.findById(id)
            .populate("posts").populate("likes");
        if (!user) {
            return res.status(400).send({ message: "User not found", success: false })
        } else {
            return res.status(200).send({ message: "User profile found", success: true, user, token })
        }
    } catch (error) {
        console.log(error);

        return res.status(500).send({ message: "Internal Server Error", success: false })
    }

}