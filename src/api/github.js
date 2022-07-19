import axios from 'axios'

const USER_SEARCH_API = 'https://api.github.com/search/users'
export const PER_PAGE = 25

const buildQueryForSearch = (search, page) => `q=${search} in:user&per_page=${PER_PAGE}&page=${page}`

const getUrl = (search, page) => `${USER_SEARCH_API}?${buildQueryForSearch(search, page)}`

export const fetchUsers = (search, page = 1) => axios.get(getUrl(search, page))
