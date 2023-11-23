interface Mogaco {
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

export type MogacoPostForm = {
  title: string;
  memberId: string;
  groupId: string;
  contents: string;
  date: string;
  maxHumanCount: string;
  address: string;
};

export type MogacoProps = Pick<
  Mogaco,
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

export type Participant = Pick<Mogaco, 'memberId' | 'nickname' | 'profile'>;
