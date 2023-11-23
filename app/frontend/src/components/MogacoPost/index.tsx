import { useForm, Controller } from 'react-hook-form';

import dayjs from 'dayjs';

import { Input, Button, Textarea } from '@/components';

import * as styles from './index.css';

type MogacoPostForm = {
  title: string;
  memberId: string;
  groupId: string;
  contents: string;
  date: string;
  maxHumanCount: string;
  address: string;
};

export function MogacoPostPage() {
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm');
  const { control, handleSubmit } = useForm<MogacoPostForm>();

  // POST 요청으로 수정 예정
  const onSubmit = (data: MogacoPostForm) => console.log(data);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        rules={{
          required: '제목을 입력해주세요',
          maxLength: { value: 64, message: '최대 64자 까지 입력 가능합니다' },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={`${styles.titleContainer} ${error && styles.error}`}>
            <div className={styles.titleContent}>
              <input
                type="text"
                className={`${styles.title}`}
                placeholder="모각코 함께해요"
                maxLength={64}
                onChange={onChange}
                value={value}
              />
              <div className={styles.count}>{value ? value.length : 0}/64</div>
            </div>
            {error && (
              <div className={styles.errorMessage}>{error.message}</div>
            )}
          </div>
        )}
      />
      <div className={styles.formContent}>
        <Controller
          control={control}
          name="memberId"
          render={({ field: { onChange, value } }) => (
            <Input
              label="작성자"
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
              label="그룹"
              placeholder="그룹을 선택해주세요"
              required
              onChange={onChange}
              value={value}
              errorMessage={error && '그룹을 선택해주세요'}
            />
          )}
        />
        <Controller
          control={control}
          name="maxHumanCount"
          rules={{
            required: '최대 인원 수를 입력해주세요',
            pattern: { value: /^[0-9]*$/, message: '숫자만 입력 가능합니다' },
            min: { value: 2, message: '최소 인원 수는 2명입니다' },
            max: { value: 20, message: '최대 인원 수는 20명입니다' },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label="최대 인원 수"
              type="number"
              placeholder="20"
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
              label="장소"
              placeholder="장소를 검색해주세요"
              required
              onChange={onChange}
              value={value}
              errorMessage={error && '장소를 검색해주세요'}
            />
          )}
        />
        <Controller
          control={control}
          name="date"
          rules={{
            required: '날짜를 선택해주세요',
            min: { value: date, message: '현재 이후의 시간을 선택해주세요' },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label="날짜 및 시간"
              type="datetime-local"
              required
              defaultValue={date}
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
            required: '설명을 입력해주세요',
            maxLength: {
              value: 1000,
              message: '최대 1000자까지 입력 가능합니다',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Textarea
              label="설명"
              rows={6}
              maxLength={1000}
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
