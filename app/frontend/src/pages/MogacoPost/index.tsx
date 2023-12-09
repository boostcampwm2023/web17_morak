import { useCallback, useEffect } from 'react';
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

  const { control, handleSubmit, setValue, reset } =
    useForm<RequestCreateMogacoDto>({
      defaultValues: {
        title: '',
        address: '',
        contents: '',
        date: '',
        groupId: '',
        status: '모집 중',
      },
      mode: 'all',
    });

  useEffect(() => {
    if (mogacoData) {
      const {
        title,
        groupId,
        address,
        latitude,
        longitude,
        contents,
        maxHumanCount,
        date,
        status,
      } = mogacoData;

      reset(
        {
          title,
          groupId,
          address,
          latitude,
          longitude,
          contents,
          date: date.toString(),
          maxHumanCount,
          status,
        },
        {
          keepDirty: true,
        },
      );
    }
  }, [mogacoData, reset]);

  const setGroup = useCallback(
    (groupId: string) => {
      setValue('groupId', groupId, { shouldDirty: true, shouldValidate: true });
    },
    [setValue],
  );

  const onSubmit = async (formData: RequestCreateMogacoDto) => {
    const { maxHumanCount, date } = formData;
    const payload = {
      ...formData,
      date: new Date(date).toISOString(),
      maxHumanCount: Number(maxHumanCount),
    };

    const response = postId
      ? await mutateAsyncEdit({ id: postId, form: payload })
      : await mutateAsyncPost(payload);

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
        <PostAddress control={control} setValue={setValue} />
        <PostDate control={control} isEdit={!!mogacoData} />
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
