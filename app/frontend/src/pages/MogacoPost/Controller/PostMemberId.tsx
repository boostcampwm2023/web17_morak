import { Controller, Control } from 'react-hook-form';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

type PostMemberIdProps = {
  control: Control<MogacoPostForm>;
};

export function PostMemberId({ control }: PostMemberIdProps) {
  return (
    <Controller
      control={control}
      name="memberId"
      render={({ field: { onChange, value } }) => (
        <Input
          label={MOGACO_POST.MEMBER.LABEL}
          required
          disabled
          defaultValue="user" // 로그인한 유저 정보
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
}
