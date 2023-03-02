import { useFormContext } from 'react-hook-form';

import { InputRhf } from 'common/components';

import { FormDataBotBacktestConfig } from '.';

export const FormStrategySpecificConfig = () => {
  const { control, watch, setValue } = useFormContext<FormDataBotBacktestConfig>();

  setValue('strategySpecificConfig.isShortingEnabled', false);

  return watch('strategyName') === 'SMA' ? (
    <>
      <InputRhf rhfName="strategySpecificConfig.periodShort" rhfControl={control} label="Period Short" type="number" />
      <InputRhf rhfName="strategySpecificConfig.periodLong" rhfControl={control} label="Period Long" type="number" />
    </>
  ) : (
    <div>isShortingEnabled:false</div>
    // <InputRhf rhfName="strategySpecificConfig.testField" rhfControl={control} label="Test Field" />
  );
};
