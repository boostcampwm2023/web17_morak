import { Controller, Control } from 'react-hook-form';

import { ResponseGroupsDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { queryKeys } from '@/queries';
import { MogacoPostForm } from '@/types';

type PostGroupIdProps = {
  control: Control<MogacoPostForm>;
  isEdit?: boolean;
};

export function PostGroupId({ control, isEdit = false }: PostGroupIdProps) {
  const { data: groups } = useQuery(queryKeys.group.myGroup());

  return (
    <Controller
      control={control}
      name="groupId"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Input
            label={MOGACO_POST.GROUP.LABEL}
            placeholder={MOGACO_POST.GROUP.REQUIRED}
            required
            disabled={isEdit}
            onChange={onChange}
            value={value}
            errorMessage={error && MOGACO_POST.GROUP.REQUIRED}
          />
          {groups && (
            <select onChange={(event) => onChange(event.target.value)}>
              {groups.map((group: ResponseGroupsDto) => (
                <option key={group.id} value={group.id}>
                  {group.title}
                </option>
              ))}
            </select>
          )}
        </>
      )}
    />
  );
}
