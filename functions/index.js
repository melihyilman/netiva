const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {email} = req.query;
    const mailOptions = {
      from: "Netiva Software",
      to: "netivasoft@gmail.com",
      subject: "Abone Eklendi",
      html: `
          <p style="font-size: 16px;">Email: ${email}</p>
          `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Message sent successfully.");
      }
    });
  });
});
exports.sendMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {name, phone, mail, message} = req.query;
    const mailOptions = {
      from: "Netiva Software",
      to: "netivasoft@gmail.com",
      subject: "Siteden Mesaj Gönderildi",
      html: `
          <p style="font-size: 16px;">İsim: ${name}</p>
          <p style="font-size: 16px;">Telefon: ${phone}</p>
          <p style="font-size: 16px;">Email: ${mail}</p>
          <p style="font-size: 16px;">Mesajı: ${message}</p>
          `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Message sent successfully.");
      }
    });
  });
});
