import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import users from './users/reducers'

const store = configureStore({
  reducer: combineReducers({ users }),
  middleware: [thunk]
})

export default store