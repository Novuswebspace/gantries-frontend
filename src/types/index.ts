//types

export type ApiResponse<T> = {
  data: T;
  message: string;
};

export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
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

export type Post = {
  _id: string;
  title: string;
  content: string;
  images: string[];
  tags: string[];
};

export type Tag = { _id: string; name: string };
export type Community = {
  _id: string;
  name: string;
  description: string;
  createdBy: User;
  picture: string;
  subscribers: User[];
  members: User[];
};
