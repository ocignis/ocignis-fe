import { useFormContext } from 'react-hook-form';

import { InputRhf } from 'common/components';

import { FormDataBotBacktestConfig } from '.';

export const FormBotBacktestInstance = () => {
  const { control } = useFormContext<FormDataBotBacktestConfig>();

  return (
    <>
      <InputRhf rhfName="name" rhfControl={control} label="Name" />
      <InputRhf rhfName="description" rhfControl={control} label="Description" rows={4} />
    </>
  );
};
