const pathParamBase = '/' as const;

const pathParamsTrades = ['/trade'] as const;
export type PathParamsTrades = (typeof pathParamsTrades)[number];

const pathParamsBacktests = ['/backtest'] as const;
export type PathParamsBacktests = (typeof pathParamsBacktests)[number];

const pathParams = [pathParamBase, ...pathParamsTrades, ...pathParamsBacktests] as const;
export type PathParams = (typeof pathParams)[number];
