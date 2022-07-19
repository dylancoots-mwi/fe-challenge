import {Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material'

export const UserListItem = ({ user }) => {
  const onClick = () => window.open(user?.html_url, '_blank')
  return (
    <ListItem onClick={onClick} style={{ cursor: 'pointer' }}>
      <ListItemAvatar>
        <Avatar src={user?.avatar_url}/>
      </ListItemAvatar>
      <ListItemText>{user?.login}</ListItemText>
    </ListItem>
  )
}