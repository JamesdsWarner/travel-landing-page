import styled from 'styled-components';

export const NavMenuWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-around;
  top: 0;
  flex-direction: row;
  background-color: #fcfcfc;
  position: absolute;
  right: 0;
  z-index: 999;
`;

export const LogoWrapper = styled.div``;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #32302f;
`;

export const NavLink = styled.span`
  cursor: pointer;
`;
