import {useDispatch, useSelector} from 'react-redux'
import {DataGrid} from '@mui/x-data-grid'
import {PER_PAGE} from '../api/github'
import {getUsersAsync} from '../store/users'
import {UserListItem} from './UserListItem'

const PAGE_OFFSET = 1
const COLUMNS = [
  {
    field: 'user',
    flex: 1,
    headerName: '',
    renderCell: ({row: user}) => <UserListItem user={user}/>
  }
]
const DEFAULT_PROPS = {
  disableSelectionOnClick: true,
  paginationMode: 'server',
  disableColumnMenu: true
}

export const UserTable = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.users)
  const { users, pagination, search } = state
  const rows = users?.map(({id, avatar_url, login, html_url}) => ({id, avatar_url, login, html_url})) || []
  const onPageChange = page => dispatch(getUsersAsync(search, (page + PAGE_OFFSET)))

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={COLUMNS}
        pageSize={PER_PAGE}
        rowsPerPageOptions={[PER_PAGE]}
        rowCount={pagination?.total}
        onPageChange={onPageChange}
        {...DEFAULT_PROPS}
      />
    </div>
  )
}

export default UserTable