export type Chat = Talk | Notification;

export type Notification = {
  type: 'notification';
  id: string;
  content: string;
  datetime: Date;
};

export type Talk = {
  type: 'talk';
  id: string;
  user: User;
  content: string;
  datetime: Date;
};

export type User = {
  id: string;
  username: string;
  profileSrc: string;
};
