import { useFormContext } from 'react-hook-form';

import { SYMBOL_PAIRS } from 'common/api/ocignis';
import { InputRhf, SelectRhf } from 'common/components';

import { FormDataBotBacktestConfig } from '.';

export const FormStrategyConfig = () => {
  const { control } = useFormContext<FormDataBotBacktestConfig>();

  return (
    <>
      <SelectRhf
        rhfName="strategyConfig.symbolPair"
        rhfControl={control}
        label="Symbol Pair"
        items={SYMBOL_PAIRS.map((symbolPair) => ({ value: symbolPair, title: symbolPair }))}
      />
      <InputRhf
        rhfName="strategyConfig.entryAmountRelative"
        rhfControl={control}
        label="Entry Amount Relative"
        type="number"
      />
      <InputRhf
        rhfName="strategyConfig.assetDecimalPlaces"
        rhfControl={control}
        label="Asset Decimal Places"
        type="number"
      />
    </>
  );
};
