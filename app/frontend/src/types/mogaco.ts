export type MogacoDetailProps = MogacoProps & {
  disabled?: boolean;
};

export type MogacoProps = {
  id: string;
  groupId: string;
  memberId: string; // 작성자
  title: string;
  contents: string;
  date: string;
  participantList: Participant[]; // 참석자
};

export type Participant = {
  id: string;
  nickname: string;
  profile: string;
};
