export type Chat = Talk | Notification;

export type ChatUser = {
  id: string;
  username: string;
  profileSrc: string;
};

export type ChattingProps = {
  title: string;
  participants: ChatUser[];
  chatItems: Chat[];
  currentUsername: string;
};

export type Notification = {
  type: 'notification';
  id: string;
  content: string;
  datetime: Date;
};

export type Talk = {
  type: 'talk';
  id: string;
  user: ChatUser;
  content: string;
  datetime: Date;
};
