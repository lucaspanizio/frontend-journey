import { ZapIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../../../store/zustand/sidebar';
import { Flex } from '../../../atoms/Flex';
import * as S from './styles';

export type MenuItem = {
  id: number;
  title: string;
  path?: string;
  submenus?: MenuItem[];
};

interface IMenuItemProps {
  data: MenuItem;
}

export const MenuItem = ({
  data: { id, path, title, submenus },
}: IMenuItemProps) => {
  const { openMenuId, toggleSubmenu } = useSidebar();

  const { pathname } = useLocation();
  const isOpen = openMenuId === id;
  const hasSubmenus = submenus && submenus.length > 0;

  const isActive =
    id === 1
      ? [path, '', '/'].includes(pathname)
      : pathname === path ||
        Boolean(submenus?.some((sub) => sub.path === pathname));

  const content = (
    <Flex gap={0} alignItems="center">
      <S.MenuID>{id}</S.MenuID>
      <S.MenuTitle>{title}</S.MenuTitle>
    </Flex>
  );

  return (
    <S.MenuItem isActive={isActive} onClick={() => toggleSubmenu(id)}>
      {path && path !== '' ? <Link to={path}>{content}</Link> : content}

      {hasSubmenus && (
        <S.SubMenuContainer isOpen={isOpen}>
          {submenus.map((submenu) => (
            <Link to={submenu.path ?? ''} key={submenu.id}>
              <S.SubMenu>
                <ZapIcon />
                {submenu.title}
              </S.SubMenu>
            </Link>
          ))}
        </S.SubMenuContainer>
      )}
    </S.MenuItem>
  );
};
