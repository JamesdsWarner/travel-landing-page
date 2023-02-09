import styled from 'styled-components';

export const BannerWrapper = styled.div``;

export const ImageWrapper = styled.div`
  overflow: hidden;

  > * {
    height: 800px;
    max-width: 4000px;
    width: auto;
    filter: brightness(0.45);
    left: 45%;
    transform: translateX(-50%);
    position: relative;
  }
`;

export const HeadingsWrapper = styled.div`
  z-index: 999;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 420px;
  text-align: center;
`;

export const MainHeader = styled.h1`
  font-size: 60px;
  width: 100vw;

  @media screen and (max-width: 1222px) {
    font-size: 50px;
  }
`;

export const SubHeader = styled.h2`
  font-weight: 400;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #219ebc;
  }
`;
