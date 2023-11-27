import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/components';
import { useSubmitEdit, useSubmitPost } from '@/queries/hooks/post';
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
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<MogacoPostForm>();
  const { mutateAsync: mutateAsyncPost } = useSubmitPost();
  const { mutateAsync: mutateAsyncEdit } = useSubmitEdit();

  const onSubmit = async ({
    title,
    contents,
    date,
    maxHumanCount,
    address,
  }: MogacoPostForm) => {
    const formData = {
      groupId: 1, // 그룹 기능 추가 이전
      title,
      contents,
      date: new Date(date).toISOString(),
      maxHumanCount: Number(maxHumanCount),
      address,
      status: '모집 중' as const,
    };
    const response = postId
      ? await mutateAsyncEdit({ id: postId, form: formData })
      : await mutateAsyncPost(formData);

    if (response.data) {
      navigate(`/mogaco/${response.data.id}`);
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
          {postId ? '수정하기' : '등록하기'}
        </Button>
      </div>
    </form>
  );
}
