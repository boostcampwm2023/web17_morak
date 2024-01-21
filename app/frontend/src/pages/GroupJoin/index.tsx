import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Input } from '@morak/ui';

import { ReactComponent as People } from '@/assets/icons/people.svg';
import { fontStyle, vars } from '@/styles';

import * as styles from './index.css';

export function GroupJoin() {
  const {
    color: { grayscale200 },
  } = vars;
  const { sansBold36, sansBold24, sansBold20, sansRegular18 } = fontStyle;

  const [currentStep, setCurrentStep] = useState(1);

  const getCurrentState = (step: number) => {
    if (step > currentStep) {
      return 'disabled';
    }

    if (step < currentStep) {
      return 'completed';
    }

    return '';
  };

  return (
    <div className={styles.container}>
      <h2 className={sansBold36}>그룹 참여</h2>
      <section className={`${styles.section} ${getCurrentState(1)}`}>
        <h3 className={sansBold24}>1. 참여 방법 선택</h3>
        <p className={sansRegular18}>어떤 방법으로 그룹에 참여할까요?</p>
        <div className={styles.confirmButtons}>
          <Button
            theme="primary"
            shape="line"
            size="large"
            fullWidth
            onClick={() => setCurrentStep(2)}
          >
            참여 코드로 참여할래요
          </Button>
          <NavLink to="/groups" className={styles.navLinkButton}>
            <Button
              type="button"
              theme="primary"
              shape="line"
              size="large"
              fullWidth
            >
              공개된 그룹을 둘러볼래요
            </Button>
          </NavLink>
        </div>
      </section>
      <section className={`${styles.section} ${getCurrentState(2)}`}>
        <h3 className={sansBold24}>2. 참여 코드 입력</h3>
        <p className={sansRegular18}>참여 코드를 입력해 주세요.</p>
        <Input />
        <div className={styles.confirmButtons}>
          <Button
            theme="primary"
            shape="line"
            size="large"
            fullWidth
            onClick={() => setCurrentStep(1)}
          >
            이전으로
          </Button>
          <Button
            theme="primary"
            shape="fill"
            size="large"
            fullWidth
            onClick={() => setCurrentStep(3)}
          >
            확인
          </Button>
        </div>
      </section>
      <section className={`${styles.section} ${getCurrentState(3)}`}>
        <h3 className={sansBold24}>3. 가입 신청 확인</h3>
        <div className={styles.group}>
          <span className={sansBold20}>부스트캠프 웹·모바일 9기</span>
          <span className={styles.participants}>
            <People width={24} height={24} fill={grayscale200} />
            160
          </span>
        </div>
        <p className={sansRegular18}>이 그룹에 가입 신청할까요?</p>
        <div className={styles.confirmButtons}>
          <Button
            theme="primary"
            shape="line"
            size="large"
            fullWidth
            onClick={() => setCurrentStep(2)}
          >
            이전으로
          </Button>
          <Button theme="primary" shape="fill" size="large" fullWidth>
            가입 신청
          </Button>
        </div>
      </section>
    </div>
  );
}
