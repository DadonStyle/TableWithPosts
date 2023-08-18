import { useState } from 'react';
// import { Post } from '../../interfaces/interface';
import useFetchPostsById from '../../hooks/Posts/useFetchPostsById.js';
import useDeletePostById from '../../hooks/Posts/useDeletePostById.js';
import Card from '../../components/Card/Card';
import S from './styled.js';
import Pagination from '../../components/Pagination/Pagination.js';

interface PostsProps {
  userId: number;
}

// in here the pagination is handeled by the BE
const Posts = ({ userId }: PostsProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deletedId, setDeletedId] = useState<number>(0);
  const PAGE_SIZE = 4;

  const deletePost = useDeletePostById();
  const postsObj = useFetchPostsById({
    userId: +userId,
    pageCount: currentPage,
    pageSize: PAGE_SIZE,
    deletedId,
  });

  const totalPages = Math.ceil(postsObj?.totalPosts / PAGE_SIZE);

  if (postsObj.posts.length < 1) return [];

  return (
    <S.PostWrapper>
      {postsObj.posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          id={post.id}
          secondId={post.userId}
          text={post.body}
          deleteByIdFunc={deletePost}
          setDeletedId={setDeletedId}
        />
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </S.PostWrapper>
  );
};

export default Posts;
