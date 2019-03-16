import * as types from './actionTypes';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_LIST_REQUEST: {
      return {
        ...initialState,
        isLoading: true,
      }
    }
    case types.FETCH_POST_LIST_SUCCESS: {
      return {
        ...initialState,
        isLoading: false,
        posts: action.payload,
      }
    }
    case types.FETCH_POST_LIST_FAILURE: {
      return {
        ...initialState,
        isLoading: false,
        error: action.error,
      }
    }
    default: return state;
  }
}

export default reducer;