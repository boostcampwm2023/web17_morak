import { Button } from '@/components';

type DetailHeaderButtonsProps = {
  state: 'not-participated' | 'participated' | 'hosted';
};

export function DetailHeaderButtons({ state }: DetailHeaderButtonsProps) {
  if (state === 'not-participated') {
    return (
      <Button theme="primary" shape="fill" size="large">
        참석하기
      </Button>
    );
  }

  if (state === 'participated') {
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

  if (state === 'hosted') {
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
