import { useState, useEffect } from 'react';
import { Post } from '../interfaces/interface';
import axios from 'axios';

interface useFetchPostsByIdProps {
  id: number;
}

const useFetchPostsById = ({ id }: useFetchPostsByIdProps) => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId={${id}}`
        );
        debugger;
        setUserPosts(res.data);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchPosts();
  }, []);

  return userPosts;
};

export default useFetchPostsById;
