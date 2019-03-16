import * as types from './actionTypes';
import { db } from '../../firebase';

const fetchPostListRequest = () => {
  return {
    type: types.FETCH_POST_LIST_REQUEST,
  }
};

const fetchPostListSuccess = (payload) => {
  return {
    type: types.FETCH_POST_LIST_SUCCESS,
    payload
  }
};

const fetchPostListFailure = (error) => {
  return {
    type: types.FETCH_POST_LIST_FAILURE,
    error
  }
};

export const fetchPostList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostListRequest());

      const postsSnapshot = await db.collection('posts').get();

      const posts = postsSnapshot.docs.map((snapshot) => {
        const data = snapshot.data();
        return {
          ...data,
          id: snapshot.id,
        }
      });

      dispatch(fetchPostListSuccess(posts));

    } catch (e) {
      dispatch(fetchPostListFailure(e));
    }
  }
}