import {TextField} from '@mui/material'
import {useEffect, useRef, useState} from 'react'
import {getUsersAsync, resetUsers, setSearchValue} from '../store/users'
import {useDispatch} from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const timer = useRef(null)
  const [search, setSearch] = useState('')

  const onChange = e => setSearch(e.target.value?.trim())
  const searchFn = () => dispatch(getUsersAsync(search))

  useEffect(() => {
    if (search) {
      clearTimeout(timer.current)
      dispatch(setSearchValue(search))
      timer.current = setTimeout(searchFn, 500)
    } else {
      dispatch(resetUsers())
    }
  }, [search])

  return (
    <TextField
      style={{width: '60%'}}
      id="search"
      label="Search Github Users"
      variant="standard"
      type="search"
      onChange={onChange}
    />
  )
}

export default Search