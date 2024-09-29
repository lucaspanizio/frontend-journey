import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircleCheckBigIcon, MenuIcon } from 'lucide-react';
import { ROUTES } from '../../../keys/routes';
import { Flex } from '../../atoms/Flex';
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

  return (
    <S.Container collapsed={collapsed}>
      <S.Header>
        <S.HamburgerButton onClick={toggleCollapse}>
          <MenuIcon />
        </S.HamburgerButton>
        <S.Title>Frontend Journey</S.Title>
      </S.Header>

      <S.Divider />

      <S.MenuList>
        {MENUS.map((menu) => (
          <S.MenuItem
            isActive={
              menu.id === 1
                ? [menu.path, '', '/'].includes(pathname)
                : pathname === menu.path
            }
          >
            <Link to={menu.path}>
              <Flex gap={0} alignItems="center">
                {menu.icon}
                <S.Title>{menu.title}</S.Title>
              </Flex>
            </Link>
          </S.MenuItem>
        ))}
      </S.MenuList>

      <S.Footer collapsed={collapsed}>Developed by Panizio</S.Footer>
    </S.Container>
  );
};
