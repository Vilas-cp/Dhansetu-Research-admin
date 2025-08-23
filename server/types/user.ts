import { z } from "zod";

type ClerkInfo = {
  userId?: string;
};

type AdminInfo = {
  password?: string;
  userName?: string;
}

type UpdateNoti = {
  notificationId?: number;
};

type RecruiterProfile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  companyWebAddress: string;
  companyEmail: string;
  industry: string;
  companySize: string;
};

type GetRecruiterProfile = RecruiterProfile & {
  id: number;
  userName: string;
  edit: boolean;
  imgURL: string;
  type: string;
  approveStatus: string;
  createdAt: string;
};

const recruiterProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  companyName: z.string(),
  userName: z.string().optional(),
  companyWebAddress: z.string().url(),
  companyEmail: z.string().email(),
  industry: z.string(),
  companySize: z.string(),
});

type CandidateProfile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  jobTitle: string;
  linkedinURL: string;
  resumeURL?: string;
  emailId?: string;
  profileNote: string;
  userName?: string;
};

type GetCandidateProfile = CandidateProfile & {
  id: number;
  userName: string;
  imgURL: string;
  candidateStar: number | null;
  setInterview: boolean;
  scheduled: boolean;
  status: string;
  workExperience: string;
  type: string;
  createdAt: string;
  reviewID: string | null;
  expertUUID: string | null;
  edit?: boolean;
  canSignOut?: boolean;
};

type Notification = {
  message: string;
  action: string;
  // Todo
  actionMessage: string;
  id: number;
  timestamp: string;
  seen?: boolean;
};

const candidateProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  jobTitle: z.string(),
  linkedinURL: z.string().url(),
  profileNote: z.string(),
  userName: z.string().optional()
});

export { recruiterProfileSchema, candidateProfileSchema };
export type {
  ClerkInfo,
  RecruiterProfile,
  CandidateProfile,
  GetRecruiterProfile,
  GetCandidateProfile,
  Notification,
  UpdateNoti,
  AdminInfo,
};
