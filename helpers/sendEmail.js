const nodemailer = require('nodemailer');

const { GMAIL_LOGIN, GMAIL_PASS } = process.env;

const nodemailerConfig = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_LOGIN,
    pass: GMAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
  const email = { ...data, from: GMAIL_LOGIN };

  transport
    .sendMail(email)
    .then(() => console.log('Email send success'))
    .catch(error => console.log('erooooooooor', error.message));

  return true;
};
module.exports = sendEmail;
