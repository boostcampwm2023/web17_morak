import { useState } from 'react';

import { ReactComponent as More } from '@/assets/icons/more_vertical.svg';
import { vars } from '@/styles';

import * as styles from './moreButton.css';

type DropdownButtonProps = {
  options: {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
};

export function MoreButton({ options }: DropdownButtonProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.moreButton} ${opened && styles.opened}`}
        onClick={() => setOpened(!opened)}
      >
        <More width={24} height={24} fill={vars.color.grayscale200} />
      </button>
      <ul className={`${styles.dropdown} ${opened && styles.opened}`}>
        {options.map(({ value, onClick }) => (
          <li key={value} className={styles.dropdownItem}>
            <button
              type="button"
              onClick={onClick}
              className={styles.dropdownButton}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
