export type Talk = {
  id: string;
  user: User;
  datetime: Date;
  content: string;
};

export type User = {
  username: string;
  profileSrc: string;
};
