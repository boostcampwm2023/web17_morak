import * as styles from './index.css';

type StepperProps = {
  currentStep: number;
  maxStep: number;
};

export function Stepper({ currentStep, maxStep }: StepperProps) {
  return (
    <div className={styles.container}>
      {[...Array(maxStep)].map((_, step) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.stepWrapper} key={step}>
          <div
            className={`${styles.step} ${
              // eslint-disable-next-line no-nested-ternary
              currentStep < step + 1
                ? 'prev'
                : currentStep > step + 1
                ? 'next'
                : ''
            }`}
          >
            {step + 1}
          </div>
          {step < maxStep - 1 ? <div className={styles.line} /> : ''}
        </div>
      ))}
    </div>
  );
}
