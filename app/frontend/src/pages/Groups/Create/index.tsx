import { useForm } from 'react-hook-form';

import { TextLabel, Button } from '@morak/ui';

import { FormInput } from '@/components';

import { GroupJoinTypeCheckbox } from './GroupJoinTypeCheckbox';
import { GroupTypeRadio } from './GroupTypeRadio';
import * as styles from './index.css';
import { GroupCreate } from './types';

export function GroupCreatePage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<GroupCreate>({
    defaultValues: {
      name: '',
      type: 'public',
      joinType: ['approve'],
    },
    mode: 'all',
  });

  const groupType = watch('type');

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormInput label="그룹명" required />
      <div className={styles.inputWrapper}>
        <TextLabel label="그룹 유형" required />
        <GroupTypeRadio control={control} />
      </div>
      {groupType === 'private' && (
        <div className={styles.inputWrapper}>
          <TextLabel label="가입 방식" required />
          <GroupJoinTypeCheckbox
            control={control}
            required={groupType === 'private'}
          />
        </div>
      )}
      <Button
        type="submit"
        theme="primary"
        shape="fill"
        size="large"
        fullWidth
        disabled={!isValid}
      >
        확인
      </Button>
    </form>
  );
}
