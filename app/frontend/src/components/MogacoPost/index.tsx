import { Input, Button, Textarea } from '@/components';

import * as styles from './index.css';

export function MogacoPostPage() {
  return (
    <form className={styles.container}>
      <div className={styles.formContent}>
        <input
          type="text"
          className={styles.title}
          placeholder="모각코 함께해요"
          required
        />
      </div>
      <div className={styles.formContent}>
        <Input label="작성자" maxLength={64} required disabled />
        <Input
          label="그룹"
          maxLength={64}
          placeholder="그룹을 선택해주세요"
          required
        />
        <Input
          label="최대 인원 수"
          type="number"
          maxLength={64}
          placeholder="20"
          required
        />
        <Input
          label="장소"
          maxLength={64}
          placeholder="장소를 검색해주세요"
          required
        />
        <Input
          label="날짜 및 시간"
          type="datetime-local"
          maxLength={64}
          required
        />
        <Textarea label="설명" maxLength={1000} />
      </div>
      <div className={styles.formContent}>
        <Button
          type="submit"
          theme="primary"
          shape="fill"
          size="large"
          fullWidth
          onClick={() => {}}
        >
          등록하기
        </Button>
      </div>
    </form>
  );
}
