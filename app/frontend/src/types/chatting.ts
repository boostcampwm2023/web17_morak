import { Member } from './member';

export type Chat = Talk | Notification;

export type Notification = {
  type: 'notification';
  id: string;
  contents: string;
  date: Date;
};

export type Talk = {
  type: 'talk';
  id: string;
  user: Member;
  contents: string;
  date: Date;
};
