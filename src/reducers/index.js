import { combineReducers } from 'redux'
import MovieListReducer from './MovieListReducer'

const rootReducer = combineReducers({
        MovieListData: MovieListReducer,
})

export default rootReducer;