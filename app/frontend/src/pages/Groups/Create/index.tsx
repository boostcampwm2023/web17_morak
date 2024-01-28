import { TextLabel, Button } from '@morak/ui';

import { FormInput } from '@/components';

import * as styles from './index.css';

export function GroupCreatePage() {
  return (
    <form className={styles.container}>
      <FormInput label="그룹명" required value="dd" />
      <div className={styles.inputWrapper}>
        <TextLabel label="그룹 유형" required />
        <div className={styles.groupWrapper}>
          <label className={styles.inputField} htmlFor="public-group">
            <input type="radio" name="group" id="public-group" />
            공개 그룹
          </label>
          <label className={styles.inputField} htmlFor="private-group">
            <input type="radio" name="group" id="private-group" />
            비공개 그룹
          </label>
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <TextLabel label="가입 방식" required />
        <label className={styles.inputField} htmlFor="need-approve">
          <input
            type="checkbox"
            id="need-approve"
            name="need-approve"
            checked
          />
          그룹장의 가입 승인 필요
        </label>
        <label className={styles.inputField} htmlFor="need-code">
          <input type="checkbox" id="need-code" name="need-code" />
          참여 코드로 바로 가입
        </label>
      </div>
      <Button type="submit" theme="primary" shape="fill" size="large" fullWidth>
        확인
      </Button>
    </form>
  );
}
