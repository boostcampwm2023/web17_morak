import { Control, useController } from 'react-hook-form';

import * as styles from './index.css';
import { GroupCreate } from './types';

type GroupJoin = 'approve' | 'code';

export function GroupJoinTypeCheckbox({
  control,
}: {
  control: Control<GroupCreate>;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'joinType',
    control,
  });

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const joinType = e.target.id as GroupJoin;
    if (value.includes(joinType)) {
      const newValue = value.filter((item) => item !== joinType);
      onChange(newValue);
    } else {
      onChange([...value, joinType]);
    }
  };

  return ['approve', 'code'].map((type) => (
    <label key={type} className={styles.inputField} htmlFor={type}>
      <input
        type="checkbox"
        id={type}
        name={type}
        checked={value.includes(type as GroupJoin)}
        onChange={onChangeCheckbox}
      />
      {type === 'approve' ? '그룹장의 가입 승인 필요' : '참여 코드로 바로 가입'}
    </label>
  ));
}
