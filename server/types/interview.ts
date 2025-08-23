import { z } from "zod";

type InterviewDetails = {
  expertName: string;
  interviewName: string;
  candidateUserName: string;
  description: string;
  timestampz: string;
  topicId: number;
  subTopicIds: number[];
};

type BasicUserDetails = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
};

type ExtraInterviewMetadata = {
  candidateImgURL?: string;
  candidateResumeURL?: string;
  candidateStar?: number;
  candidateLinkedinURL?: string;
  candidatePhoneNumber?: string;
  candidateEmailId?: string;
  recruiterCompanyName?: string;
  recruiterCompanyEmail?: string;
  recruiterCompanyWebAddress?: string;
  recruiterPhoneNumber?: string;
  recruiterImgURL?: string;
};

type VerifyInterview = {
  id: number;
  expertName: string;
  interviewDetails: string;
  scheduledAt: string;
  recruiterFirstName: string;
  recruiterLastName: string;
  recruiterUserName: string;
  candidateFirstName: string;
  candidateLastName: string;
  candidateUserName: string;
  topicId: number;
  topicName: string;
  zoomStartLink?: string;
  zoomJoinLink?: string;
  zoomVideoLink?: string | null;
} & ExtraInterviewMetadata;

const interviewDetailsSchema = z.object({
  expertName: z.string(),
  candidateUserName: z.string(),
  description: z.string(),
  timestampz: z.string(),
  topicId: z.number(),
  interviewName: z.string(),
  subTopicIds: z.number().array(),
});

type InterviewTopic = {
  topicName: string;
  description?: string;
  subTopics: {
    subTopicName: string;
    description?: string;
    subTopicQuestions: {
      question: string;
      description?: string;
    }[];
  }[];
};

type BasicSubTopic2 = {
  subTopicId: number;
  interviewTopicId: number;
  subTopicName: string;
  description?: string;
};

type BasicTopic = {
  id: number;
  topicName: string;
  description?: string;
  subTopics: BasicSubTopic2[];
};

type BasicSubTopicQuestion = {
  id: number;
  question: string;
  description?: string;
};

type BasicSubTopic = {
  id: number;
  subTopicName: string;
  description?: string;
  questions?: BasicSubTopicQuestion[];
};

type InterviewOutcome = {
  subTopicId: number;
  description: string;
  rating: number;
  subTopicName?: string;
  outcomeId?: number;
};

type GetInterviewOutcome = {
  id: number;
  subTopicId: number;
  description: string;
  rating: number;
  subTopicName?: string;
  outcomeId?: number;
};

const outcomeSchema = z.object({
  interviewUUID: z.string(),
  expertConfirmationUUID: z.string(),
  interviewDetails: z.string(),
  outcomes: z.array(
    z.object({
      subTopicId: z.number(),
      description: z.string(),
      rating: z.number().min(0).max(5),
      outcomeId: z.number().optional(),
    })
  ),
});

const outcomeDeleteSchema = z.object({
  interviewUUID: z.string(),
  expertConfirmationUUID: z.string(),
});

export type {
  InterviewDetails,
  VerifyInterview,
  InterviewTopic,
  BasicUserDetails,
  BasicTopic,
  BasicSubTopic,
  BasicSubTopic2,
  InterviewOutcome,
  BasicSubTopicQuestion,
  GetInterviewOutcome,
};
export { interviewDetailsSchema, outcomeSchema, outcomeDeleteSchema };
