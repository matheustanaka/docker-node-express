const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res) => {
    const { username, password } = req.body
    
    try {
        const hashpassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            username,
            password: hashpassword
        })

        res.status(201).json({ 
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "failed"
        })
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username})

        if(!user) {
            return res.status(404).json({ status: "failed", message: "User not found"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(isPasswordCorrect) {
            res.status(200).json({
                status: "success"
            })
        }
        else {
            res.status(404).json({
                status: "failed",
                message: "username or password are incorrect"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "failed"
        })
    }
}