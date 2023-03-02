import { Box } from '@mui/material';
import Link from 'next/link';

import { AppBarLinks } from '../types';

import { AppBarItemLink } from './AppBarItemLink';

export type AppBarItemsProps = {
  links: AppBarLinks;
};

export const AppBarItems = ({ links }: AppBarItemsProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {links.map((link) =>
        link.isSelected || link.isDisabled ? (
          <AppBarItemLink
            key={link.name}
            name={link.name}
            isSelected={Boolean(link.isSelected)}
            isDisabled={Boolean(link.isDisabled)}
          />
        ) : (
          <Link key={link.name} href={link.url} passHref>
            <AppBarItemLink
              name={link.name}
              isSelected={Boolean(link.isSelected)}
              isDisabled={Boolean(link.isDisabled)}
            />
          </Link>
        ),
      )}
    </Box>
  );
};
