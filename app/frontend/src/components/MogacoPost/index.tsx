import { useForm, Controller } from 'react-hook-form';

import dayjs from 'dayjs';

import { Input, Button, Textarea } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

import * as styles from './index.css';
import { MogacoPostTitle } from './MogacoPostTitle';

export function MogacoPostPage() {
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm');
  const { control, handleSubmit } = useForm<MogacoPostForm>();

  // POST 요청으로 수정 예정
  const onSubmit = () => {};

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <MogacoPostTitle control={control} />
      <div className={styles.formContent}>
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
        <Controller
          control={control}
          name="groupId"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label={MOGACO_POST.GROUP.LABEL}
              placeholder={MOGACO_POST.GROUP.REQUIRED}
              required
              onChange={onChange}
              value={value}
              errorMessage={error && MOGACO_POST.GROUP.REQUIRED}
            />
          )}
        />
        <Controller
          control={control}
          name="maxHumanCount"
          rules={{
            required: MOGACO_POST.COUNT.REQUIRED,
            pattern: {
              value: /^[0-9]*$/,
              message: MOGACO_POST.COUNT.PATTERN,
            },
            min: {
              value: MOGACO_POST.COUNT.MIN_VALUE,
              message: MOGACO_POST.COUNT.MIN,
            },
            max: {
              value: MOGACO_POST.COUNT.MAX_VALUE,
              message: MOGACO_POST.COUNT.MAX,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label={MOGACO_POST.COUNT.LABEL}
              type="number"
              placeholder={MOGACO_POST.COUNT.REQUIRED}
              required
              onChange={onChange}
              value={value}
              errorMessage={error && error.message}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label={MOGACO_POST.ADDRESS.LABEL}
              placeholder={MOGACO_POST.ADDRESS.REQUIRED}
              required
              onChange={onChange}
              value={value}
              errorMessage={error && MOGACO_POST.ADDRESS.REQUIRED}
            />
          )}
        />
        <Controller
          control={control}
          name="date"
          rules={{
            required: MOGACO_POST.DATE.REQUIRED,
            min: { value: date, message: MOGACO_POST.DATE.MIN },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label={MOGACO_POST.DATE.LABEL}
              type="datetime-local"
              required
              min={date}
              onChange={onChange}
              value={value}
              errorMessage={error && error.message}
            />
          )}
        />
        <Controller
          control={control}
          name="contents"
          rules={{
            required: MOGACO_POST.CONTENTS.REQUIRED,
            maxLength: {
              value: MOGACO_POST.CONTENTS.MAX_LENGTH,
              message: MOGACO_POST.CONTENTS.MAX,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Textarea
              label={MOGACO_POST.CONTENTS.LABEL}
              placeholder={MOGACO_POST.CONTENTS.REQUIRED}
              rows={MOGACO_POST.CONTENTS.ROWS}
              maxLength={MOGACO_POST.CONTENTS.MAX_LENGTH}
              required
              onChange={onChange}
              value={value}
              errorMessage={error && error.message}
            />
          )}
        />
      </div>
      <div className={styles.formContent}>
        <Button
          type="submit"
          theme="primary"
          shape="fill"
          size="large"
          fullWidth
        >
          등록하기
        </Button>
      </div>
    </form>
  );
}
