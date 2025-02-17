import styled, { css } from 'styled-components'

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`

type MenuItemProps = {
  isActive: boolean
}

export const MenuItem = styled('li').withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<MenuItemProps>`
  position: relative;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.text};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: ${theme.colors.primary};
      }
    `}

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => css`
      background-color: ${theme.colors.backgroundAccent};
    `}
  }

  svg {
    min-width: 30px;
  }
`

type SubMenuProps = {
  isOpen: boolean
}

export const SubMenuContainer = styled.div<SubMenuProps>`
  left: 1.25rem;
  position: relative;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  transition: ${({ isOpen }) => (isOpen ? 'max-height 0.5s ease-out' : 'none')};
`

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: 1rem;
  margin-top: 1rem;
`

export const MenuID = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  outline: 1px solid ${({ theme }) => theme.colors.text};
`

export const MenuTitle = styled.span`
  padding-left: 3rem;
  overflow-x: hidden;
`

type TooltipProps = {
  isVisible: boolean
}

export const Tooltip = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<TooltipProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1000;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;

  top: 50%;
  left: 100%;
  transform: translateY(-50%);
`
