interface MogacoTypes {
  id: string;
  groupId: string;
  memberId: string;
  title: string;
  contents: string;
  date: string;
  participantList: Participant[];
  maxHumanCount: number;
  address: string;
  status: '모집 중' | '마감' | '종료';
  nickname: string;
  profile: string;
}

export type Mogaco = Pick<
  MogacoTypes,
  | 'id'
  | 'groupId'
  | 'memberId'
  | 'title'
  | 'contents'
  | 'date'
  | 'participantList'
  | 'maxHumanCount'
  | 'address'
  | 'status'
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
>;

export type Participant = Pick<MogacoTypes, 'id' | 'nickname' | 'profile'>;
