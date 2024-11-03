import styled, { css } from 'styled-components';

type SidebarProps = {
  collapsed: boolean;
};

export const Container = styled('aside').withConfig({
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<SidebarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  white-space: nowrap;
  min-width: 60px;
  font-size: 0.9rem;
  height: auto;
  width: ${({ collapsed }) => (collapsed ? '60px' : '280px')};
  transition: width 0.3s;
  background-color: #0f172a;

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

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 0 1.2rem;
  color: #d4d4d8;
`;

export const Title = styled.span`
  font-size: 1.1rem;
  padding-left: 1rem;
  overflow-x: hidden;
`;

export const Divider = styled.hr`
  margin: 1rem 0.5rem;
  border: 0.5px solid #6b7280;
`;

export const Footer = styled('footer').withConfig({
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<SidebarProps>`
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
