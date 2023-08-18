import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  gap: 2rem;
`;

const Table = styled.table`
  width: 150px;
  border-collapse: collapse;
  text-align: center;
  max-width: 700px;
  width: 100%;
`;

const TableHeader = styled.th`
  min-width: 50px;
  padding: 5px;
  border: 1px solid black;
  font-size: 12px;
`;

const TableHeaderAddress = styled.th`
  max-width: 50px;
  padding: 5px;
  border: 1px solid black;
  font-size: 12px;
`;

const TableRow = styled.tr`
  border: 1px solid black;
  :hover {
    background-color: gold;
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid black;
`;

const TableCellAddress = styled.td`
  max-width: 50px;
  width: 100%;
  text-overflow: ellipsis;
  overflow-x: hidden;
  padding: 5px;
  border: 1px solid black;
  white-space: nowrap;
`;

const PaginationContainer = styled.div`
  margin-top: 10px;
`;

const S = {
  TableContainer,
  Table,
  TableHeader,
  TableHeaderAddress,
  TableRow,
  TableCell,
  TableCellAddress,
  PaginationContainer,
};

export default S;
