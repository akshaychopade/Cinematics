import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE } from '../utils/constants'

export default function fetchMovieData() {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/list/1?language=en-US&api_key=1b31282aebdebc34884006adfac40bfb")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json.items)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

function getLisData() {
    return {
        type: FETCHING_LIST
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_LIST_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_LIST_FAILURE,

    }
}