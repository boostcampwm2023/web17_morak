import { Input } from '@morak/ui';

import { MOGACO_POST } from '@/constants';
import { useGetMyInfoQuery } from '@/queries/hooks';

export function PostMember() {
  const { data } = useGetMyInfoQuery();

  return (
    <Input
      label={MOGACO_POST.MEMBER.LABEL}
      required
      disabled
      defaultValue={data?.nickname}
    />
  );
}
