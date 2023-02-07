import * as Styled from './Banner.styles';
import Image from 'next/image';

export default function Banner() {
  return (
    <Styled.BannerWrapper>
      <Styled.ImageWrapper>
        <Image src="/images/london.jpeg" width="800" height="800" />
      </Styled.ImageWrapper>
      <Styled.HeadingsWrapper>
        <Styled.MainHeader>Visit London</Styled.MainHeader>{' '}
        <Styled.SubHeader>Find out more</Styled.SubHeader>
      </Styled.HeadingsWrapper>
    </Styled.BannerWrapper>
  );
}
