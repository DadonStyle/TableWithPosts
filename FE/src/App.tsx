import Table from './components/Table/Table';
import useFetchUsers from './hooks/useFetchUsers';
import S from './styled';

function App() {
  const users = useFetchUsers();

  return (
    <S.Wrapper>
      <Table users={users} />
    </S.Wrapper>
  );
}

export default App;
