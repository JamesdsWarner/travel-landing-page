import styled from 'styled-components';

export const WhatToDoWrapper = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ThingToDoWrapper = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  justify-content: center;
  color: #32302f;
  gap: 30px;
  margin-left: 150px;
  margin-right: 150px;

  > * {
    &:last-child {
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
      transition: all 0.7s ease;

      &:hover {
        scale: 1.02;
        left: 46%;
      }
    }
  }
`;

export const ThingToDoTextWrapper = styled.div`
  width: 50%;
`;

export const ThingToDoHeader = styled.h2`
  font-size: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ThingToDoDescription = styled.p`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const FindOutMore = styled.a`
  font-size: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
  font-weight: 300;
  &:hover {
    color: #219ebc;
  }
`;
