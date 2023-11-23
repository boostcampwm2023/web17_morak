import { Controller, Control } from 'react-hook-form';

import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

import * as styles from './index.css';

type MogacoPostTitleProps = {
  control: Control<MogacoPostForm>;
};

const TITLE_MAXLENGTH = 64;

export function MogacoPostTitle({ control }: MogacoPostTitleProps) {
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
              placeholder={MOGACO_POST.TITLE.PLACEHOLDER}
              maxLength={TITLE_MAXLENGTH}
              onChange={onChange}
            />
            <div className={styles.count}>
              {value ? value.length : 0}/{TITLE_MAXLENGTH}
            </div>
          </div>
          {error && <div className={styles.errorMessage}>{error.message}</div>}
        </div>
      )}
    />
  );
}
