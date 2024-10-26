import { MenuIcon } from 'lucide-react';
import { useSidebar } from '@/store/zustand/sidebar';
import { MenuList } from './MenuList';
import * as S from './styles';

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
