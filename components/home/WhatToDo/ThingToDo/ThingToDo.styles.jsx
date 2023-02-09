import styled from 'styled-components';

export const ThingToDoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  justify-content: center;
  color: #32302f;
  gap: 30px;
  margin-left: 150px;
  margin-right: 150px;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  margin-top: ${(props) => (props.inView ? '0' : '80px')};
  transition: all 0.5s ease;
  width: 80vw;
  margin-bottom: 100px;

  @media screen and (max-width: 1222px) {
    flex-direction: column;
    justify-content: left;
    width: 800px;
  }

  @media screen and (max-width: 665px) {
    width: 95vw;
  }
`;

export const ImageWrapper = styled.div`
  width: 850px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  transition: all 0.7s ease;

  &:hover {
    scale: 1.02;
  }

  @media screen and (max-width: 1222px) {
    width: 550px;
  }

  @media screen and (max-width: 665px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }

  > * {
    @media screen and (max-width: 1470px) {
    }
    @media screen and (max-width: 1222px) {
      margin-top: -50px;
    }
  }
`;

export const ThingToDoTextWrapper = styled.div`
  width: 80%;
`;

export const ThingToDoHeader = styled.h2`
  font-size: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 1470px) {
    font-size: 70px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 665px) {
    font-size: 50px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 40px;
    margin-bottom: 0;
  }
`;

export const ThingToDoDescription = styled.p`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  font-weight: 600;
  @media screen and (max-width: 1470px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 665px) {
    font-size: 18px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const FindOutMore = styled.a`
  font-size: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
  font-weight: 300;
  @media screen and (max-width: 1470px) {
    font-size: 18px;
  }
  @media screen and (max-width: 665px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  &:hover {
    color: #219ebc;
  }
`;
