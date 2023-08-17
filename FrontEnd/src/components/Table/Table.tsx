import { useState, useEffect } from 'react';
import S from './styled';
import { User } from '../../interfaces/interface';

interface TableProps {
  users: User[];
}

const Table = ({ users }: TableProps) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortedUsers, setSortedUsers] = useState(users);
  // calculate pagination -> calculate currentUsers which map to show the results
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentUsers = sortedUsers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Update sortedUsers whenever users prop changes
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
            <S.TableRow key={index}>
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
      <S.PaginationContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={Math.random()}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </S.PaginationContainer>
    </S.TableContainer>
  );
};

export default Table;
