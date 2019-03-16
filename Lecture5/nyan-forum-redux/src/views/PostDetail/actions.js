import * as types from './actionTypes';
import { db } from '../../firebase';

const fetchPostDetailRequest = () => {
  return {
    type: types.FETCH_POST_DETAIL_REQUEST
  }
}

const fetchPostDetailSuccess = (payload) => {
  return {
    type: types.FETCH_POST_DETAIL_SUCCESS,
    payload,
  }
}

const fetchPostDetailFailure = (error) => {
  return {
    type: types.FETCH_POST_DETAIL_FAILURE,
    error
  }
}

export const fetchPostDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostDetailRequest());
      // post
      const postSnapshot = await db.collection('posts').doc(id).get();
      const post = postSnapshot.data();

      // comments
      const commentsSnapshot = await Promise.all(post.comments.map(ref => ref.get()));
      const comments = commentsSnapshot.map((snapshot) => {
        return {
          id: snapshot.id,
          ...snapshot.data()
        }
      });
      dispatch(fetchPostDetailSuccess({
        post,
        comments
      }));
    } catch (e) {
      dispatch(fetchPostDetailFailure(e));
    }
  }
}