export type MogacoDetailProps = MogacoProps & {
  disabled?: boolean;
};

export type MogacoProps = {
  id: string;
  groupId: string;
  // group: string;
  memberId: string; // 작성자
  title: string;
  contents: string;
  date: string;
  participantList: Participant[]; // 참석자
  maxHumanCount: number;
  address: string;
  status: string;
};

export type Participant = {
  id: string;
  nickname: string;
  profile: string;
};
