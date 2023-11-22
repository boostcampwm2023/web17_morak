import { Button } from '@/components';

type DetailHeaderButtonsProps = {
  status: string;
};

const buttonComponents = {
  '모집 중': (
    <Button theme="primary" shape="fill" size="large">
      참석하기
    </Button>
  ),
  마감: (
    <>
      <Button theme="primary" shape="fill" size="large">
        채팅
      </Button>
      <Button theme="primary" shape="line" size="large">
        참석 취소
      </Button>
    </>
  ),
  종료: (
    <>
      <Button theme="primary" shape="line" size="large">
        수정
      </Button>
      <Button theme="danger" shape="line" size="large">
        삭제
      </Button>
    </>
  ),
};

export function DetailHeaderButtons({ status }: DetailHeaderButtonsProps) {
  return status ? buttonComponents[status as '모집 중' | '마감' | '종료'] : '';
}
