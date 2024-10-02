import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleCheckBigIcon, MenuIcon } from 'lucide-react';
import { ROUTES } from '../../../keys/routes';
import { Flex } from '../../atoms/Flex';
import { MenuIcon } from 'lucide-react';
import { useSidebar } from '../../../store/zustand/sidebar';
import { MenuList } from './MenuList';
import * as S from './styles';

const MENUS = [
  {
    id: 1,
    path: ROUTES.COMPOUND_PATTERN,
    title: 'Compound Pattern',
    icon: <CircleCheckBigIcon />,
  },
];

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
export const Sidebar = () => {
  const { collapsed, toggle } = useSidebar();

  return (
    <S.Container collapsed={collapsed}>
      <S.Header>
        <S.HamburgerButton onClick={toggle}>
          <MenuIcon />
        </S.HamburgerButton>
        <S.Title>Frontend Journey</S.Title>
      </S.Header>

      <S.Divider />

      <MenuList />

      <S.Footer collapsed={collapsed}>Developed by Panizio</S.Footer>
    </S.Container>
  );
};
