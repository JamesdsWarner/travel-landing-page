import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  font-size: 20px;
  gap: 5px;
  cursor: pointer;
  align-items: center;

  > * {
    &:last-child {
      font-size: 30px;
      margin-right: 10px;
    }
  }
`;

export const FooterText = styled.p``;
