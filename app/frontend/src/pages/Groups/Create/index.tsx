import { Controller, useForm } from 'react-hook-form';

import { TextLabel, Button } from '@morak/ui';

import { FormInput } from '@/components';

import * as styles from './index.css';

type GroupJoin = 'need-approve' | 'need-code';
type GroupCreate = {
  name: string;
  type: 'public' | 'private';
  joinType: GroupJoin[];
};
export function GroupCreatePage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<GroupCreate>({
    defaultValues: {
      name: '',
      type: 'public',
      joinType: ['need-approve'],
    },
    mode: 'all',
  });
  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormInput label="그룹명" required />
      <div className={styles.inputWrapper}>
        <TextLabel label="그룹 유형" required />
        <div className={styles.groupWrapper}>
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <>
                {['public', 'private'].map((type) => (
                  <label
                    key={type}
                    className={styles.inputField}
                    htmlFor={type}
                  >
                    <input
                      type="radio"
                      name="group"
                      id={type}
                      checked={value === type}
                      onChange={(e) => onChange(e.target.id)}
                    />
                    {type === 'public' ? '공개' : '비공개'} 그룹
                  </label>
                ))}
              </>
            )}
          />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <TextLabel label="가입 방식" required />
        <label className={styles.inputField} htmlFor="need-approve">
          <input type="checkbox" id="need-approve" name="need-approve" />
          그룹장의 가입 승인 필요
        </label>
        <label className={styles.inputField} htmlFor="need-code">
          <input type="checkbox" id="need-code" name="need-code" />
          참여 코드로 바로 가입
        </label>
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
