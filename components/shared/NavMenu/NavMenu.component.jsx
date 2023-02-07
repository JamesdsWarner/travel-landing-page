import * as Styled from './NavMenu.styles';
import Image from 'next/image';
import { handleClickScroll } from '../../../helpers/handleClickScroll';

export default function NavMenu() {
  const handleClick = (event) => {
    handleClickScroll(event);
  };
  return (
    <Styled.NavMenuWrapper id="navMenu-section">
      <Styled.LogoWrapper>
        <Image src="/images/london-logo.png" height="150" width="150" />
      </Styled.LogoWrapper>
      <Styled.NavLinksWrapper>
        <Styled.NavLink onClick={(event) => handleClick(event)}>What to do</Styled.NavLink>
      </Styled.NavLinksWrapper>
    </Styled.NavMenuWrapper>
  );
}
