import { db } from '../../firebase';

export const createPost = ({
  author,
  title,
  content,
}) => {
  return async (dispatch) => {
    try {
      await db.collection('posts').doc().set({
        author,
        title,
        content,
        comments: []
      });
    } catch (e) {
      console.log(e);
    }
  }
}