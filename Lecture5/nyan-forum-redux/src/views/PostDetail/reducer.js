import * as types from './actionTypes';

const initialState = {
  post: null,
  comments: [],
  isLoading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_DETAIL_REQUEST: {
      return {
        ...initialState,
        isLoading: true
      }
    }
    case types.FETCH_POST_DETAIL_SUCCESS: {
      return {
        ...initialState,
        post: action.payload.post,
        comments: action.payload.comments,
        isLoading: false,
      }
    }
    case types.FETCH_POST_DETAIL_FAILURE: {
      return {
        ...initialState,
        isLoading: false,
        error: action.error
      }
    }
    default: return state;
  }
}

export default reducer;