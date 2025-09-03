import { z } from "zod";

type ClerkInfo = {
  userId?: string;
};

type AdminInfo = {
  password?: string;
  userName?: string;
};

type AdminUser = {
  userName: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  id: number;
  uuid: string;
};

type UserType = "free" | "premium";

type ClientUser = {
  emailId: string;
  type: UserType;
  clerkId: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  id: number;
  uuid: string;
};


type UpdateNoti = {
  notificationId?: number;
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
  Notification,
  ClientUser,
  UpdateNoti,
  AdminInfo,
  AdminUser
};
