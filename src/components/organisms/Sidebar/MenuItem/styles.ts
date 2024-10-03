import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

type MenuItemProps = {
  isActive: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  padding: 0.75rem 1rem;
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

type SubMenuProps = {
  isOpen: boolean;
};

export const SubMenuContainer = styled.div<SubMenuProps>`
  left: 1.25rem;
  position: relative;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  transition: ${({ isOpen }) => (isOpen ? 'max-height 0.5s ease-out' : 'none')};
`;

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;

export const MenuID = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid white;
`;

export const MenuTitle = styled.span`
  padding-left: 3rem;
  overflow-x: hidden;
`;
