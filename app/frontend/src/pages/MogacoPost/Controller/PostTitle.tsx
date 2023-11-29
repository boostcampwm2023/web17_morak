import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { MOGACO_POST } from '@/constants';

import * as styles from './index.css';

type PostTitleProps = {
  control: Control<RequestCreateMogacoDto>;
};

export function PostTitle({ control }: PostTitleProps) {
  return (
    <Controller
      control={control}
      name="title"
      rules={{
        required: MOGACO_POST.TITLE.REQUIRED,
        maxLength: {
          value: MOGACO_POST.TITLE.MAX_LENGTH,
          message: MOGACO_POST.TITLE.MAX,
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`${styles.titleContainer} ${error && styles.error}`}>
          <div className={styles.titleContent}>
            <input
              type="text"
              className={styles.title}
              placeholder={MOGACO_POST.TITLE.REQUIRED}
              maxLength={MOGACO_POST.TITLE.MAX_LENGTH}
              onChange={onChange}
              value={value}
            />
            <div className={styles.count}>
              {value?.length || 0}/{MOGACO_POST.TITLE.MAX_LENGTH}
            </div>
          </div>
          {error && <div className={styles.errorMessage}>{error.message}</div>}
        </div>
      )}
    />
  );
}
