import express from "express"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config({})

const app = express()

let port = process.env.PORT || 3021

app.use(express.json())

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMPT_SECURE,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
})

app.post("/send-email", async (req, res) => {
    try {
        let { email } = req.body

                if (!email) {
            return res.status(400).json({
                message: "Please enter an email address!"
            });
        }

        // Check if email ends with @gmail.com
        if (!email.endsWith("@gmail.com")) {
            return res.status(400).json({
                message: "Please enter a valid Gmail address ending with @gmail.com!"
            });
        }

        const emailAction = await transporter.sendMail({
            from: "Testing Nodemailer",
            to: email,
            subject: "testing the nodemailer",
            text: "somthing something"
        })

        res.status(202).json({ message: "email sent successfully !" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "somthing went wrong !", err })
    }
})

app.listen(port, () => {
    console.log('server is running on port : ', port)
})