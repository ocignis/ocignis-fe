import { Box, SxProps, Typography } from '@mui/material';

import { BlockInfo } from '../BlockInfo';

import { RowData } from './RowData';

type BlockDataProps = {
  title: string;
  blockObject: object;
  sx?: SxProps;
};

export const BlockData = ({ title, blockObject, sx }: BlockDataProps) => {
  return (
    <BlockInfo title={title} sx={sx}>
      {Object.entries(blockObject).map(([key, value]) => {
        if (typeof value === 'object' && !(value instanceof Date)) {
          return <BlockDataChild key={key} title={key} blockObject={value} />;
        }

        return <RowData key={key} title={key} value={value} />;
      })}
    </BlockInfo>
  );
};

const BlockDataChild = ({ title, blockObject }: BlockDataProps) => {
  return (
    <Box sx={{ ml: 1 }}>
      <Typography variant="subheader2" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {Object.entries(blockObject).map(([key, value]) => {
        if (typeof value === 'object') {
          return <BlockDataChild key={key} title={key} blockObject={value} />;
        }

        return <RowData key={key} title={key} value={value} />;
      })}
    </Box>
  );
};
