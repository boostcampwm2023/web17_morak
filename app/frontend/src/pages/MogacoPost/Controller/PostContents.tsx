import { Controller, Control } from 'react-hook-form';

import { Textarea } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

type PostContentsProps = {
  control: Control<MogacoPostForm>;
};

export function PostContents({ control }: PostContentsProps) {
  return (
    <Controller
      control={control}
      name="contents"
      rules={{
        required: MOGACO_POST.CONTENTS.REQUIRED,
        maxLength: {
          value: MOGACO_POST.CONTENTS.MAX_LENGTH,
          message: MOGACO_POST.CONTENTS.MAX,
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Textarea
          label={MOGACO_POST.CONTENTS.LABEL}
          placeholder={MOGACO_POST.CONTENTS.REQUIRED}
          rows={MOGACO_POST.CONTENTS.ROWS}
          maxLength={MOGACO_POST.CONTENTS.MAX_LENGTH}
          required
          onChange={onChange}
          value={value}
          errorMessage={error && error.message}
        />
      )}
    />
  );
}
