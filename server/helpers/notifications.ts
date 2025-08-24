import moment from "moment";

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

export { interviewNotification };
