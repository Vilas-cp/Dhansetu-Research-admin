import moment from "moment";
import nodemailer from "nodemailer";
import { mailTemplate } from "./email";

class MailHandler {
  static mail: nodemailer.Transporter;
  static mailId: string;

  constructor();
  constructor(mailId: string, mailPass: string);
  constructor(mailId?: string, mailPass?: string) {
    if (MailHandler.mail) {
      return;
    }
    if (!mailId || !mailPass) {
      console.log(`Initially need Mail Credentials to connect!`);
      return;
    }
    MailHandler.mailId = mailId;
    MailHandler.mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailId,
        pass: mailPass,
      },
    });
    console.log(`MailHandler has configured to mail id: ${mailId}`);
  }

  async sendMail(senderMailId: string, amount: string, subName: string, paymentDate: string, txnId: string, userName: string) {
    const emailHTML = mailTemplate(userName, amount, subName, txnId, paymentDate);
    // console.log("In");
    const mailOptions = {
      from: `Dhansetu <${MailHandler.mailId}>`,
      to: senderMailId,
      subject: "Payment Successful",
      text: `Hello ,\n\nYour Payment was successful. Welcome aboard!\n\nBest Regards,\nHackathon Team`,
      html: emailHTML,
    };

    try {
      const info = await MailHandler.mail.sendMail(mailOptions);
      console.log(`Email sent: ${info.messageId}`);
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  }
}

export { MailHandler };
