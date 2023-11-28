import {
  RequestCreateMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';

import { TypeWrapper } from './typeChanger';

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

export type Mogaco = Omit<ResponseMogacoWithMemberDto, 'participants'>;

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

export type MogacoPostRequest = TypeWrapper<RequestCreateMogacoDto>;
