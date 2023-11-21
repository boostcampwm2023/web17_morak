import { Button } from '@/components/commons/Button';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';

type PostHeaderProps = {
  state: 'not-participated' | 'participated' | 'hosted';
};

export function PostHeader({ state }: PostHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={sansBold24}>모각코 함께 해요</div>
      <div className={styles.buttons}>
        {
          // eslint-disable-next-line no-nested-ternary
          state === 'not-participated' ? (
            <Button theme="primary" shape="fill" size="large">
              참석하기
            </Button>
          ) : state === 'participated' ? (
            <>
              <Button theme="primary" shape="fill" size="large">
                채팅
              </Button>
              <Button theme="primary" shape="line" size="large">
                참석 취소
              </Button>
            </>
          ) : (
            <>
              <Button theme="primary" shape="line" size="large">
                수정
              </Button>
              <Button theme="danger" shape="line" size="large">
                삭제
              </Button>
            </>
          )
        }
      </div>
    </div>
  );
}
