import { combineReducers } from 'redux'
import gameReducers from './gameReducers'
import categoryReducer from './categoryReducer'
import detailsReducer from './detailsReducer'

const rootReducer = combineReducers({
  games: gameReducers,
  category: categoryReducer,
  detail: detailsReducer

})

export default rootReducer
