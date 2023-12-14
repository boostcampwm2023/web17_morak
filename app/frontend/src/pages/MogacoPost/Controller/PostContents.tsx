import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { FormTextarea } from '@/components';
import { MOGACO_POST } from '@/constants';

type PostContentsProps = {
  control: Control<RequestCreateMogacoDto>;
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
        <FormTextarea
          label={MOGACO_POST.CONTENTS.LABEL}
          aria-label="내용"
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
