import { TextLabel, Button } from '@morak/ui';

import { FormInput } from '@/components';

import * as styles from './index.css';

export function GroupCreatePage() {
  return (
    <form className={styles.container}>
      <FormInput label="그룹명" required value="dd" />
      <TextLabel label="그룹 유형" required />
      <div>
        <div>
          <label htmlFor="public-group">
            <input type="radio" name="group" id="public-group" />
            공개 그룹
          </label>
        </div>
        <div>
          <label htmlFor="private-group">
            <input type="radio" name="group" id="private-group" />
            비공개 그룹
          </label>
        </div>
      </div>
      <TextLabel label="가입 방식" required />
      <div>
        <label htmlFor="need-approve">
          <input
            type="checkbox"
            id="need-approve"
            name="need-approve"
            checked
          />
          그룹장의 가입 승인 필요
        </label>
      </div>
      <div>
        <label htmlFor="need-code">
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
