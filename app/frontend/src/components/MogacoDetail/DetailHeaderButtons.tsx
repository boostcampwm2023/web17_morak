import { Button } from '@/components';

type DetailHeaderButtonsProps = {
  status: string;
};

export function DetailHeaderButtons({ status }: DetailHeaderButtonsProps) {
  if (status === '모집 중') {
    return (
      <Button theme="primary" shape="fill" size="large">
        참석하기
      </Button>
    );
  }

  if (status === '마감') {
    return (
      <>
        <Button theme="primary" shape="fill" size="large">
          채팅
        </Button>
        <Button theme="primary" shape="line" size="large">
          참석 취소
        </Button>
      </>
    );
  }

  if (status === '종료') {
    return (
      <>
        <Button theme="primary" shape="line" size="large">
          수정
        </Button>
        <Button theme="danger" shape="line" size="large">
          삭제
        </Button>
      </>
    );
  }

  return null;
}
