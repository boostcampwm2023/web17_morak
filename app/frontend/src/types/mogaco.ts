import { Member } from './member';

interface MogacoTypes {
  id: string;
  groupId: string;
  memberId: string;
  title: string;
  contents: string;
  date: string;
  maxHumanCount: number;
  address: string;
  coord: string;
  status: '모집 중' | '마감' | '종료';
  nickname: string;
  profilePicture: string;
  member: Member;
  participants: Member[];
  group: { id: string; title: string };
}

export type Mogaco = Pick<
  MogacoTypes,
  | 'id'
  | 'groupId'
  | 'title'
  | 'contents'
  | 'date'
  | 'maxHumanCount'
  | 'address'
  | 'coord'
  | 'status'
  | 'member'
  | 'participants'
  | 'group'
>;

export type MogacoPostForm = Pick<
  MogacoTypes,
  | 'title'
  | 'memberId'
  | 'groupId'
  | 'contents'
  | 'date'
  | 'maxHumanCount'
  | 'address'
  | 'status'
>;

export type MogacoPostRequest = Pick<
  MogacoTypes,
  | 'title'
  | 'groupId'
  | 'contents'
  | 'date'
  | 'maxHumanCount'
  | 'address'
  | 'coord'
  | 'status'
>;

export type { MogacoTypes };
