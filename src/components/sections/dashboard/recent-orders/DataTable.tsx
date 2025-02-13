import { useEffect } from 'react';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from './../../../../components/common/DataGridFooter';
// import { rows } from './../../../../data/recentOrdersData';
import { IGuest } from './../../../../types';



const columns: GridColDef<(IGuest[])[number]>[] = [
  {
    field: 'id',
    headerName: 'Tracking no',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 50,
  },
  {
    field: '_name',
    headerName: 'Guest Name',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 200,
    sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
  {
    field: '_from',
    headerName: 'From',
    headerAlign: 'left',
    editable: false,
    flex: 1,
    minWidth: 80,
  },
  {
    field: '_confirm',
    headerName: 'Confirmation',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 50,
  },
  {
    field: '_count',
    headerName: 'Guests count',
    editable: false,
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 50,
  },
  {
    field: 'created_at',
    headerName: 'Posted date',
    headerAlign: 'left',
    align: 'left',
    editable: false,
    flex: 2,
    minWidth: 200,
    
  },
];

interface TaskOverviewTableProps {
  searchText: string;
  rows: IGuest[]
}

const DataTable = ({ searchText, rows }: TaskOverviewTableProps) => {
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={50}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 4 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      checkboxSelection
      pageSizeOptions={[4]}
    />
  );
};

export default DataTable;
