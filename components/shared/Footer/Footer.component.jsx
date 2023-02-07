import * as Styled from './Footer.styles';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { handleClickScroll } from '../../../helpers/handleClickScroll';

export default function Footer() {
  const handleClick = (event) => {
    handleClickScroll(event);
  };
  return (
    <Styled.FooterWrapper>
      <Image src="/images/london-logo.png" height="200" width="200" />
      <Styled.FooterTextWrapper>
        <Styled.FooterText onClick={(event) => handleClick(event)}>Scroll to top</Styled.FooterText>
        <Icon icon="material-symbols:arrow-upward" />
      </Styled.FooterTextWrapper>
    </Styled.FooterWrapper>
  );
}
