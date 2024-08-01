import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../organisms/Sidebar';
import * as S from './styles';

export const Layout: React.FC = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};
