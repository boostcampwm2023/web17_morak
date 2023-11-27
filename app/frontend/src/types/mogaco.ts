import {
  RequestCreateMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';

import { TypeFromInterface } from '@/utils';

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

export type Mogaco = Omit<
  TypeFromInterface<ResponseMogacoWithMemberDto>,
  'participants'
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

export type MogacoPostRequest = TypeFromInterface<RequestCreateMogacoDto>;
