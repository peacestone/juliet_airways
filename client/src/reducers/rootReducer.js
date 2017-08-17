import { combineReducers } from 'redux'
import reservations from './reservations'
import flights from './flights'

export default combineReducers({reservations, flights})
