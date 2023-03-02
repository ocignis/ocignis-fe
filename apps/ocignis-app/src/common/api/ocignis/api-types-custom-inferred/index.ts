import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import { AppRouter } from '../api-types';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

// Bot Backtest
export type BotConfig = RouterInput['bot']['commands']['run']['botConfig'];

export type BotInstance = RouterInput['bot']['instances']['upsert'];

export type BotInstances = RouterOutput['bot']['instances']['list'];

// Bot Backtest
export type BotBacktestInstance = RouterInput['botBacktest']['instances']['upsert'];

export type BotBacktestInstances = RouterOutput['botBacktest']['instances']['list'];

export type BotBacktestConfig = RouterInput['botBacktest']['commands']['run']['botBacktestConfig'];

export type BotBacktestInfoResponse = RouterOutput['botBacktest']['commands']['run'];
