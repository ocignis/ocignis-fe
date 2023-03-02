import { useFormContext } from 'react-hook-form';

import { InputRhf } from 'common/components';

import { FormDataBotConfig } from '.';

export const FormBotInstance = () => {
  const { control } = useFormContext<FormDataBotConfig>();

  return (
    <>
      <InputRhf rhfName="name" rhfControl={control} label="Name" />
      <InputRhf rhfName="description" rhfControl={control} label="Description" rows={4} />
    </>
  );
};
