import React, { useState, useEffect } from 'react';
import S from './styled';
import { User } from '../../interfaces/interface';
import Posts from '../Posts/Posts';
import Pagination from '../../components/Pagination/Pagination';

interface TableProps {
  users: User[];
}

interface CurrentUserPosts {
  userId: number;
  isShown: boolean;
}

const Table = ({ users }: TableProps) => {
  const PAGE_SIZE = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortedUsers, setSortedUsers] = useState(users);
  const [currentUserPosts, setCurrentUserPosts] = useState<CurrentUserPosts>({
    userId: 1,
    isShown: false,
  });

  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentUsers = sortedUsers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(sortedUsers.length / PAGE_SIZE);

  const handleRowClick = (user: User) => () =>
    setCurrentUserPosts({ userId: user.id, isShown: true });

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const handleSortByName = () => {
    const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newSortDirection);

    const sorted = [...sortedUsers].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return newSortDirection === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return newSortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setSortedUsers(sorted);
  };

  if (currentUserPosts.isShown === true)
    return <Posts userId={currentUserPosts.userId} />;

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader onClick={handleSortByName}>Full Name</S.TableHeader>
            <S.TableHeader>Email</S.TableHeader>
            <S.TableHeader>City</S.TableHeader>
            <S.TableHeaderAddress>Street</S.TableHeaderAddress>
            <S.TableHeaderAddress>Suite</S.TableHeaderAddress>
            <S.TableHeaderAddress>Zipcode</S.TableHeaderAddress>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <S.TableRow onClick={handleRowClick(user)} key={index}>
              <S.TableCell>{user.name}</S.TableCell>
              <S.TableCell>{user.email}</S.TableCell>
              <S.TableCellAddress>{user.address.city}</S.TableCellAddress>
              <S.TableCellAddress>{user.address.street}</S.TableCellAddress>
              <S.TableCellAddress>{user.address.suite}</S.TableCellAddress>
              <S.TableCellAddress>{user.address.zipcode}</S.TableCellAddress>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </S.TableContainer>
  );
};

export default Table;
