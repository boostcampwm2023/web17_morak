import { useController, useForm } from 'react-hook-form';

import { TextLabel, Button } from '@morak/ui';

import { FormInput } from '@/components';

import { GroupTypeRadio } from './GroupTypeRadio';
import * as styles from './index.css';
import { GroupCreate } from './types';

export function GroupCreatePage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<GroupCreate>({
    defaultValues: {
      name: '',
      type: 'public',
      joinType: ['approve'],
    },
    mode: 'all',
  });

  const {
    field: { value: nameValue, onChange: onChangeName },
  } = useController({
    name: 'name',
    control,
    rules: {
      required: true,
    },
  });
  return (
    <form
      className={styles.container}
      // TODO: POST 요청
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormInput
        label="그룹명"
        required
        value={nameValue}
        onChange={onChangeName}
      />
      <div className={styles.inputWrapper}>
        <TextLabel label="그룹 유형" required />
        <GroupTypeRadio control={control} />
      </div>
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
