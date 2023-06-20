const express = require ('express');
const router = require ('express').Router();
const nodemailer = require ('nodemailer');

router.post('/pendingBill', async (req, res) => {
  const { to, subject, body } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'sunera831@outlook.com',
      pass: 'Progamer1',
    },
  });

  const mailOptions = {
    from: 'sunera831@outlook.com',
    to,
    subject,
    text: body,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

  module.exports = router;