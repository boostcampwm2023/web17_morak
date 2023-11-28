import {
  RequestCreateMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';

import { JsonTypeChanger, TypeWrapper } from './typeChanger';

type MogacoType = JsonTypeChanger<TypeWrapper<ResponseMogacoWithMemberDto>>;

export type Mogaco = Omit<MogacoType, 'participants'>;

export type MogacoPostForm = Pick<
  MogacoType,
  | 'title'
  | 'groupId'
  | 'contents'
  | 'date'
  | 'maxHumanCount'
  | 'address'
  | 'status'
>;

export type MogacoPostRequest = TypeWrapper<RequestCreateMogacoDto>;
