import moment from "moment";
import nodemailer from "nodemailer";
import { mailTemplate } from "./email";

function interviewNotification(
  interview: any,
  interviewUUID: string,
  candidateConfirmationUUID: string,
  expertConfirmationUUID: string,
  recruiterDetails: any,
  candidateDetails: any,
  topicName: string
) {
  const candidateMessage = `Interview ${
    interview.interviewName
  } on topic '${topicName}' is set by ${recruiterDetails.userName} (${
    recruiterDetails.firstName
  } ${recruiterDetails.lastName}),
            to expert ${interview.expertName}, interview start ${moment(
    interview.timestampz
  ).fromNow()}!`.replace(/\s+/g, " ");

  // `at ${moment(
  //   interview.timestampz
  // ).format("MMMM Do YYYY, h:mm:ss a")} UTC`;
  const candidateInterviewURL = `/meeting/${interviewUUID}?candidate=${candidateConfirmationUUID}`;

  const recruiterMessage = `Interview ${
    interview.interviewName
  } on topic '${topicName}' is set to candidate user ${
    candidateDetails.userName
  } (${candidateDetails.firstName} ${candidateDetails.lastName}), and
        to expert ${interview.expertName}, interview start ${moment(
    interview.timestampz
  ).fromNow()}. 
        Please share the 'interview link' to expert!`.replace(/\s+/g, " ");

  const recruiterInterviewURL = `/meeting/${interviewUUID}?expert=${expertConfirmationUUID}`;
  return {
    candidate: {
      message: candidateMessage,
      action: candidateInterviewURL,
    },
    recruiter: {
      message: recruiterMessage,
      action: recruiterInterviewURL,
    },
  };
}

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

  async sendMail(senderMailId: string, amount: string, subName: string, paymentDate: string, paymentMethod: string, txnId: string, userName: string) {
    const emailHTML = mailTemplate(userName, amount, subName, txnId, paymentDate, paymentMethod);

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

export { interviewNotification, MailHandler };
