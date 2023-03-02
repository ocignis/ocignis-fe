import MaterialReactTable from 'material-react-table';

import { BotBacktestInfoResponse } from 'common/api/ocignis';

import { useColumns } from './useColumns';

type PositionsClosed = BotBacktestInfoResponse['data']['positionsClosed'];
export type PositionClosed = PositionsClosed[number];

export type ClosedPositionsTableProps = {
  positionsClosed: PositionsClosed;
};

export const ClosedPositionsTable = ({ positionsClosed }: ClosedPositionsTableProps) => {
  const { columns } = useColumns();

  return (
    <MaterialReactTable
      columns={columns}
      data={positionsClosed as Array<PositionClosed>}
      enableColumnActions={true}
      enableColumnFilters={true}
      enablePagination={false}
      enableSorting={true}
      enableBottomToolbar={false}
      enableTopToolbar={true}
      enableRowNumbers={true}
      enableRowVirtualization={true}
      rowVirtualizerProps={{ overscan: 7 }}
      enableHiding={true}
      initialState={{
        density: 'compact',
        columnVisibility: {
          roiAbsolute: true,
          roiRelative: true,
          positionType: true,
          entryOrderType: false,
          entryPrice: false,
          entryQuantity: false,
          entryTime: true,
          exitOrderType: false,
          exitPrice: false,
          exitQuantity: false,
          exitTime: true,
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          py: 1.7,
          px: 2,
          '& .Mui-TableHeadCell-Content': {
            justifyContent: 'space-between',
          },
        },
      }}
      muiTableBodyCellProps={{
        sx: { px: 2 },
      }}
      enableStickyHeader
      muiTableContainerProps={{
        sx: {
          maxHeight: '330px',
        },
      }}
      displayColumnDefOptions={{
        'mrt-row-numbers': {
          enableHiding: true,
        },
      }}
    />
  );
};
