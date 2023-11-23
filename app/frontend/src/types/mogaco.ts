interface MogacoTypes {
  id: string;
  groupId: number;
  memberId: string;
  title: string;
  contents: string;
  date: string;
  maxHumanCount: number;
  address: string;
  status: '모집 중' | '마감' | '종료';
  nickname: string;
  profilePicture: string;
}

export type Mogaco = Pick<
  MogacoTypes,
  | 'id'
  | 'groupId'
  | 'memberId'
  | 'title'
  | 'contents'
  | 'date'
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
  | 'status'
>;

export type Participant = Pick<
  MogacoTypes,
  'id' | 'nickname' | 'profilePicture'
>;
