import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';

import { PositionClosed } from '.';

import { CellDate } from './CellDate';
import { CellGeneric } from './CellGeneric';
import { Header } from './Header';

export const useColumns = () => {
  const columns = useMemo<Array<MRT_ColumnDef<PositionClosed>>>(
    () => [
      {
        accessorKey: 'roiAbsolute',
        header: 'ROI Absolute',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.roiAbsolute} isColoredNumberValue={true} />,
      },
      {
        accessorKey: 'roiRelative',
        header: 'ROI Relative',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.roiRelative} isColoredNumberValue={true} />,
      },
      {
        accessorKey: 'positionType',
        header: 'Position Type',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.positionType} />,
      },
      {
        accessorKey: 'entryOrderType',
        header: 'Entry Order Type',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.entryOrderType} />,
      },
      {
        accessorKey: 'entryPrice',
        header: 'Entry Price',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.entryPrice} />,
      },
      {
        accessorKey: 'entryQuantity',
        header: 'Entry Quantity',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.entryQuantity} />,
      },
      {
        accessorKey: 'entryTime',
        header: 'Entry Time',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellDate date={original.entryTime} />,
      },
      {
        accessorKey: 'exitOrderType',
        header: 'Exit Order Type',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.exitOrderType} />,
      },
      {
        accessorKey: 'exitPrice',
        header: 'Exit Price',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.exitPrice} />,
      },
      {
        accessorKey: 'exitQuantity',
        header: 'Exit Quantity',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellGeneric content={original.exitQuantity} />,
      },
      {
        accessorKey: 'exitTime',
        header: 'Exit Time',
        Header: ({ column }) => <Header label={column.columnDef.header} />,
        Cell: ({ row: { original } }) => <CellDate date={original.exitTime} />,
      },
    ],
    [],
  );

  return { columns };
};
