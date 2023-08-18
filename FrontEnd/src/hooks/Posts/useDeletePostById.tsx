import axios from 'axios';

const useDeletePostById = () => {
  const deletePost = async (postId: number, userId: number) => {
    try {
      await axios.delete(
        `http://localhost:3000/posts/?userId=${userId}&id=${postId}` // change url to not be hardcoded to localhost
      );
    } catch (err) {
      console.warn(err);
    }
  };

  return deletePost;
};

export default useDeletePostById;
