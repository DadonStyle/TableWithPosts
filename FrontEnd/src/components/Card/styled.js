import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  border: 2px solid black;
  padding: 1rem;
  max-width: 500px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const DeleteIconWrapper = styled.div`
  svg {
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
  :hover {
    background: black;
  }
`;

const Body = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  font-family: fantasy;
`;

const S = {
  CardWrapper,
  Header,
  Title,
  DeleteIconWrapper,
  Body,
};

export default S;
