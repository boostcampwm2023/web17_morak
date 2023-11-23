export type Mogaco = {
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
};

export type Participant = {
  id: string;
  nickname: string;
  profile: string;
};
