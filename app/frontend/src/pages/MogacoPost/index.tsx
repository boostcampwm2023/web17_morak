import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { useSubmitPost } from '@/queries/hooks/post';
import { MogacoPostForm } from '@/types';

import { PostMemberId, PostTitle } from './Controller';
import { PostAddress } from './Controller/PostAddress';
import { PostContents } from './Controller/PostContents';
import { PostDate } from './Controller/PostDate';
import { PostGroupId } from './Controller/PostGroupId';
import { PostMaxHumanCount } from './Controller/PostMaxHumanCount';
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
    const res = await mutateAsync({
      groupId: 1,
      title,
      contents,
      date: new Date(date).toISOString(),
      maxHumanCount: Number(maxHumanCount),
      address,
      status: '모집 중',
    });

    if (res.status === 201) {
      // TODO: 글 id 받아서 상세 페이지로 이동 필요
      navigate('/mogaco');
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
