const { text } = require("express");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SYSTEM_EMAIL,
      pass: process.env.SYSTEM_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SYSTEM_EMAIL,
    to: email,
    subject: "Mail delivery Alert",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error sending email:", error });
  }
};

module.exports = sendEmail;
