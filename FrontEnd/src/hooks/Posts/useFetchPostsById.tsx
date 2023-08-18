import { useState, useEffect } from 'react';
import { Post } from '../../interfaces/interface';
import axios from 'axios';

interface useFetchPostsByIdProps {
  userId: number;
  pageSize: number;
  pageCount: number;
  deletedId: number;
}

interface PostResObj {
  posts: Post[];
  totalPosts: number;
}

const useFetchPostsById = ({
  userId,
  pageSize,
  pageCount,
  deletedId,
}: useFetchPostsByIdProps) => {
  const [userPosts, setUserPosts] = useState<PostResObj>({
    posts: [],
    totalPosts: 0,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/posts/?userId=${userId}&pageSize=${pageSize}&pageCount=${pageCount}` // change url to not be hardcoded to localhost
        );
        setUserPosts(res.data);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchPosts();
  }, [userId, pageSize, pageCount, deletedId]);

  return userPosts;
};

export default useFetchPostsById;
