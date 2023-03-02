import { useFormContext } from 'react-hook-form';

import { InputRhf } from 'common/components';

import { FormDataBotConfig } from '.';

export const FormStrategySpecificConfig = () => {
  const { control, watch } = useFormContext<FormDataBotConfig>();

  return watch('strategyName') === 'SMA' ? (
    <>
      <InputRhf rhfName="strategySpecificConfig.periodShort" rhfControl={control} label="Period Short" type="number" />
      <InputRhf rhfName="strategySpecificConfig.periodLong" rhfControl={control} label="Period Long" type="number" />
    </>
  ) : (
    <div>isShortingEnabled:false</div>
    // <InputRhf rhfName="strategySpecificConfig.isShortingEnabled" rhfControl={control} label="Test Field" />
  );
};
