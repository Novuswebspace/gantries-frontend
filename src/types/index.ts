//types

export type ApiResponse<T> = {
  data: T | any;
  message: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  isOAuthUser: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: string;
};

export type Student = {
  user_id: string;
  dateOfBirth: String;
  gender: string;
  institution: string;
  qualification: string;
  fieldOfStudy: string;
  interests: string[];
  bio: string;
  profilePicture: string;
  socialLinks: String[];
};
