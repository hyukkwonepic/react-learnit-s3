import { db } from '../../firebase';

export const createComment = ({
  id,
  author,
  content
}) => {
  return async (dispatch) => {
    try {
      const newCommentRef = db.collection('comments').doc();
      await newCommentRef.set({
        author,
        content,
      });

      const postSnapshot = await db.collection('posts').doc(id).get();
      const commentsByPost = postSnapshot.data().comments;
      await db.collection('posts').doc(id).update({
        comments: [
          ...commentsByPost,
          newCommentRef
        ]
      });
    } catch (e) {
      console.log(e);
    }
  }
}