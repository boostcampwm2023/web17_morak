import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { useSubmitPost } from '@/queries/hooks/post';
import { MogacoPostForm } from '@/types';

import {
  PostMemberId,
  PostTitle,
  PostAddress,
  PostContents,
  PostDate,
  PostGroupId,
  PostMaxHumanCount,
} from './Controller';
import * as styles from './index.css';

export function MogacoPostPage() {
  const { control, handleSubmit } = useForm<MogacoPostForm>();

  const navigate = useNavigate();
  const { mutateAsync } = useSubmitPost();

  const onSubmit = async ({
    title,
    contents,
    date,
    maxHumanCount,
    address,
  }: MogacoPostForm) => {
    const response = await mutateAsync({
      groupId: 1,
      title,
      contents,
      date: new Date(date).toISOString(),
      maxHumanCount: Number(maxHumanCount),
      address,
      status: '모집 중',
    });

    if (response.status === 201) {
      const {
        data: { id },
      } = response;

      navigate(`/mogaco/${id}`);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <PostTitle control={control} />
      <div className={styles.formContent}>
        <PostMemberId control={control} />
        <PostGroupId control={control} />
        <PostMaxHumanCount control={control} />
        <PostAddress control={control} />
        <PostDate control={control} />
        <PostContents control={control} />
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
