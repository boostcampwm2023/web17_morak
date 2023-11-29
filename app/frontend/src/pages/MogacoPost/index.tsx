import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components';
import { queryKeys } from '@/queries';
import { useSubmitEdit, useSubmitPost } from '@/queries/hooks/post';

import {
  PostMember,
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

  const { mutateAsync: mutateAsyncPost } = useSubmitPost();
  const { mutateAsync: mutateAsyncEdit } = useSubmitEdit();
  const { data: mogacoData } = useQuery({
    ...queryKeys.mogaco.detail(postId || ''),
    enabled: !!postId,
  });
  const { control, handleSubmit, reset, setValue } =
    useForm<RequestCreateMogacoDto>({
      defaultValues: {
        title: '',
        address: '',
        contents: '',
        date: '',
        groupId: '',
        maxHumanCount: 0,
        status: '모집 중',
      },
    });

  useEffect(() => {
    if (mogacoData) {
      const { title, address, contents, maxHumanCount, date, status } =
        mogacoData;
      reset({
        title,
        address,
        contents,
        date: date.toString(),
        maxHumanCount,
        status,
      });
    }
  }, [mogacoData, reset]);

  const setGroup = (groupId: string) => {
    setValue('groupId', groupId);
  };

  const onSubmit = async ({
    title,
    contents,
    date,
    maxHumanCount,
    address,
    groupId,
  }: RequestCreateMogacoDto) => {
    const formData = {
      groupId,
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
        <PostMember />
        <PostGroupId
          control={control}
          isEdit={!!mogacoData}
          setGroup={setGroup}
        />
        <PostMaxHumanCount control={control} isEdit={!!mogacoData} />
        <PostAddress control={control} />
        <PostDate control={control} isEdit={!!mogacoData} />
        <PostContents control={control} />
      </div>
      <div className={styles.formContent}>
        {/* TODO: 등록 불가 시 비활성화 처리 */}
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
