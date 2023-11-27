import { ResponseMemberDto } from '@morak/apitype';

import { TypeFromInterface } from '@/utils';

export type Member = TypeFromInterface<ResponseMemberDto>;
