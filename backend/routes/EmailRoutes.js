const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const { EMAIL_KEY, EMAIL_FROM, PERSONAL_EMAIL} = process.env;

sgMail.setApiKey(EMAIL_KEY);

router.post("/send", (req, res) => {
    console.log(req.body);
    const { email, msg } = req.body;
    sgMail.send({
        from: EMAIL_FROM,
        to: PERSONAL_EMAIL,
        replyTo: email,
        subject: `New message from ${email}`,
        text: msg
    })
    .then(() => {}, error => {
        console.log("error", error);
        if (error.response) {           
            console.log(error.response.body); 
            res.send({
                status: 500,
                msg: "Email was unable to send, please try again"
            })
        }
        res.send({
            status: 200,
            msg: "Email sent successfully!"
        })
    })
})


module.exports = router;