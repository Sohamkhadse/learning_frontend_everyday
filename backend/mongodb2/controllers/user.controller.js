import { userModel } from "../models/user.model.js"

const userRegistration = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const user = await userModel.create({ name, email, password })

        res.status(201).json({
            message: "user registered successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            message: "unable to register new user !",
            error
        })
    }
}

export { userRegistration }