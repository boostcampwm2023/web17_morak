import { Button } from '@/components';

const buttonComponents = {
  participating: (
    <Button theme="primary" shape="fill" size="large">
      참석하기
    </Button>
  ),
  participated: (
    <>
      <Button theme="primary" shape="fill" size="large">
        채팅
      </Button>
      <Button theme="danger" shape="fill" size="large">
        참석 취소
      </Button>
    </>
  ),
  hosted: (
    <>
      <Button theme="primary" shape="line" size="large">
        수정
      </Button>
      <Button theme="danger" shape="line" size="large">
        삭제
      </Button>
    </>
  ),
  closed: (
    <Button theme="primary" shape="fill" size="large" disabled>
      마감
    </Button>
  ),
};

type DetailHeaderButtonsProps = {
  status: '모집 중' | '마감' | '종료';
};

export function DetailHeaderButtons({ status }: DetailHeaderButtonsProps) {
  const userHosted = false;
  const userParticipated = false;

  if (userHosted) {
    return buttonComponents.hosted;
  }

  if (status === '모집 중') {
    return userParticipated
      ? buttonComponents.participated
      : buttonComponents.participating;
  }

  return buttonComponents.closed;
}
