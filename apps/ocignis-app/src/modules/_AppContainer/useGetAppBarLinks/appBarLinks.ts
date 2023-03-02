import { AppBarLinks } from 'common/components';
import { paths } from 'common/routes';

export const appBarLinks: AppBarLinks = [
  {
    name: 'Trade',
    url: paths.TRADE,
  },
  {
    name: 'Backtest',
    url: paths.BACKTEST,
    isDisabled: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
  },
];
