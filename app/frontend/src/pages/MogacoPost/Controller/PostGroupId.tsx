import { useEffect } from 'react';
import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { TextLabel } from '@morak/ui';
import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';

import * as styles from './group.css';

type PostGroupIdProps = {
  control: Control<RequestCreateMogacoDto>;
  isEdit?: boolean;
  setGroup: (groupId: string) => void;
};

export function PostGroupId({
  control,
  isEdit = false,
  setGroup,
}: PostGroupIdProps) {
  const { data: groups } = useQuery(queryKeys.group.myGroup());

  useEffect(() => {
    if (groups && groups.length > 0) {
      setGroup(groups[0].id);
    }
  }, [groups, setGroup]);

  return (
    <Controller
      control={control}
      name="groupId"
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <>
          <TextLabel label="그룹" required />
          {groups && groups.length > 0 ? (
            <select
              onChange={(event) => onChange(event.target.value)}
              className={styles.container}
              disabled={isEdit}
            >
              {groups.map((groupItem) => (
                <option key={groupItem.id} value={groupItem.id}>
                  {groupItem.title}
                </option>
              ))}
            </select>
          ) : (
            <div className={styles.message}>
              속한 그룹이 1개 이상이어야 글을 작성할 수 있습니다. 그룹에 가입해
              주세요!
            </div>
          )}
        </>
      )}
    />
  );
}
