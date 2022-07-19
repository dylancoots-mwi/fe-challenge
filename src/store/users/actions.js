import {fetchUsers} from '../../api/github'
import {RESET_STATE, SET_SEARCH_VALUE, SET_USERS} from './types'

export const getUsersAsync = (search, page = 1) => (dispatch) =>
  fetchUsers(search, page).then((response) => dispatch({
    type: SET_USERS,
    payload: response?.data
})).catch(() => alert('API rate limit exceeded'))

export const setSearchValue = search => ({
    type: SET_SEARCH_VALUE,
    payload: search
})

export const resetUsers = () => ({type: RESET_STATE})
