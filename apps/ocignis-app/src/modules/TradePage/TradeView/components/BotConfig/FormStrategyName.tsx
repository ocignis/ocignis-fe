import { useFormContext } from 'react-hook-form';

import { STRATEGY_NAMES } from 'common/api/ocignis';
import { SelectRhf } from 'common/components';

import { FormDataBotConfig } from '.';

export const FormStrategyName = () => {
  const { control } = useFormContext<FormDataBotConfig>();

  return (
    <SelectRhf
      rhfName="strategyName"
      rhfControl={control}
      label=""
      items={STRATEGY_NAMES.map((strategyName) => ({ value: strategyName, title: strategyName }))}
    />
  );
};
