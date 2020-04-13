const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASSWORD,
  },
});

transport.verify().then((res) => console.log(res));

module.exports = {
  async sendMailToUser(user, email, grievanceId) {
    try {
      await transport.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: "Alert for new Task",
        html: `
        This is to let you know dear ${user} that you just got a new task ${grievanceId}. `,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async sendmailToRetrievePassword(user, email, newPassword) {
    try {
       await transport.sendMail({
         from: process.env.GMAIL,
         to: email,
         subject: "Congratulations! You got new got New Password.",
         html: `
        This is to let you know dear ${user} that you just got a new Password is ${newPassword}. `,
       });
    } catch (error) {
       console.log(error);
    }
  }
};
