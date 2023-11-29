import { useEffect } from 'react';
import { Controller, Control } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { MogacoPostForm } from '@/types';

import * as styles from './group.css';

type PostGroupIdProps = {
  control: Control<MogacoPostForm>;
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
      setGroup(groups[0].id.toString());
    }
  }, [groups, setGroup]);

  return (
    <Controller
      control={control}
      name="groupId"
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <>
          {/* TODO: 그룹 라벨 */}
          <div>그룹</div>
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
            <div>그룹에 가입해 주세요!</div>
          )}
        </>
      )}
    />
  );
}
