import styled, { css } from 'styled-components';

type ContainerProps = {
  collapsed: boolean;
};

export const Container = styled.aside<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  white-space: nowrap;
  min-width: 60px;
  font-size: 0.9rem;
  transition: width 0.3s;
  height: auto;
  overflow: hidden;
  background-color: #0f172a;
  width: ${({ collapsed }) => (collapsed ? '60px' : '230px')};

  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const HamburgerButton = styled.button`
  border: none;
  background: none;
  min-width: 30px;
  color: #d4d4d8;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

type MenuItemProps = {
  isActive?: boolean;
  collapsed?: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #d4d4d8;

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: #84cc16;
      }
    `}

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  svg {
    min-width: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 0 1.2rem;
  color: #d4d4d8;
`;

export const Title = styled.span`
  padding-left: 1rem;
  overflow-x: hidden;
`;

export const Divider = styled.hr`
  margin: 1rem 0.5rem;
  border: 0.5px solid #6b7280;
`;

export const Footer = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  padding: 1rem;
  bottom: 0;
  color: #d4d4d8;

  ${({ collapsed }) =>
    collapsed &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;
