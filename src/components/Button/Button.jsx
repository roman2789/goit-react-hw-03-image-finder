import { SearchButton } from './ButtonStyled';

export const Button = ({ onClick }) => {
  return (
    <>
      <SearchButton onClick={onClick}>Load more</SearchButton>
    </>
  );
};
