import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE } from '../utils/constants'

const initialState = {
    MovieListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function MovieListReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_LIST:
            return {
                ...state,
                isFetchingList: true,
                MovieListData: []
            }

        case FETCHING_LIST_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                MovieListData: action.data
            }

        case FETCHING_LIST_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}