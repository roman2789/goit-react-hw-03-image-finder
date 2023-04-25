import { SearchButton, ButtonLabel } from './ButtonStyled';
import { ImSearch } from 'react-icons/im';

export const Button = () => {
  return (
    <>
      <SearchButton type="submit" class="button">
        <ImSearch />
        <ButtonLabel></ButtonLabel>
      </SearchButton>
    </>
  );
};
