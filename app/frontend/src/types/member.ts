import { ResponseMemberDto } from '@morak/apitype';

import { TypeWrapper } from './typeChanger';

export type Member = TypeWrapper<ResponseMemberDto>;
