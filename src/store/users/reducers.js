import {PER_PAGE} from '../../api/github'
import {RESET_STATE, SET_SEARCH_VALUE, SET_USERS} from './types'

const INITIAL_STATE = {
  users: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    total: 0
  },
  search: ''
};

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      const pagination = {
        total: payload?.total_count,
        totalPages: Math.ceil((payload?.total_count || 1) / PER_PAGE),
        currentPage: payload?.currentPage || 1,
      }
      return Object.assign({}, {...state, pagination, users: payload?.items})
    case SET_SEARCH_VALUE:
      return Object.assign(state, {search: payload})
    case RESET_STATE:
      return INITIAL_STATE
    default: return state
  }
}

export default users

