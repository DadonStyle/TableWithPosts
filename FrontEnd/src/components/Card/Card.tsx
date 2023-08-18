import S from './styled';

interface CardProps {
  title: string;
  text: string;
  id: number;
  secondId: number;
  deleteByIdFunc: (id: number, secondId: number) => Promise<void>; // trying to keep this component as generic as possilbe
  setDeletedId: (id: number) => void;
}

const Card = ({
  title,
  text,
  secondId,
  id,
  deleteByIdFunc,
  setDeletedId,
}: CardProps) => {
  const handleDelete = async () => {
    await deleteByIdFunc(id, secondId);
    setDeletedId(id);
  };

  return (
    <S.CardWrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.DeleteIconWrapper onClick={handleDelete}>delete</S.DeleteIconWrapper>
      </S.Header>
      <S.Body>{text}</S.Body>
    </S.CardWrapper>
  );
};

export default Card;
