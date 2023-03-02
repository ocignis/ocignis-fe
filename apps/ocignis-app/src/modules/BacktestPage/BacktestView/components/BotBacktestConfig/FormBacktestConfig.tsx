import { useFormContext } from 'react-hook-form';

import { FEE_RATE_TRADING } from 'common/api/ocignis';
import { DatePickerRhf, InputRhf, SelectRhf } from 'common/components';

import { FormDataBotBacktestConfig } from '.';

export const FormBacktestConfig = () => {
  const { control } = useFormContext<FormDataBotBacktestConfig>();

  return (
    <>
      <InputRhf rhfName="backtestConfig.balance_BUSD" rhfControl={control} label="Balance BUSD" type="number" />
      <DatePickerRhf label="Time - Start" rhfName="backtestConfig.startTime" rhfControl={control} />
      <DatePickerRhf label="Time - End" rhfName="backtestConfig.endTime" rhfControl={control} />
      <SelectRhf
        rhfName="backtestConfig.fee"
        rhfControl={control}
        label="Trading Fee"
        items={Object.entries(FEE_RATE_TRADING).map(([key, value]) => ({
          value,
          title: `${key} - ${value}%`,
        }))}
      />
    </>
  );
};
