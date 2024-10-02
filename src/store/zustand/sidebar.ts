import { create } from 'zustand';
import { MenuItem } from '../../components/organisms/Sidebar/MenuItem';

interface SidebarStore {
  menus: MenuItem[];
  collapsed: boolean;
  openMenuId: number;
  toggle: () => void;
  toggleSubmenu: (menuId: number) => void;
}

const initialState = {
  collapsed: false,
  openMenuId: 0,
  menus: [
    { id: 1, path: '/compound-pattern', title: 'Compound Pattern' },
    { id: 2, path: '/state-managers', title: 'Gerenciadores de Estado' },
  ],
};

export const useSidebar = create<SidebarStore>()((set) => ({
  ...initialState,
  toggle: () => {
    set((state) => {
      const collapsed = !state.collapsed;
      const hasSubmenuOppened = !!state.openMenuId;
      return {
        ...state,
        collapsed,
        openMenuId: hasSubmenuOppened ? 0 : state.openMenuId,
      };
    });
  },
  toggleSubmenu: (menuId: number) => {
    set((state) => {
      const menuIsAlreadyOpen = menuId === state.openMenuId;
      return {
        ...state,
        collapsed:
          !menuIsAlreadyOpen && state.collapsed ? false : state.collapsed,
        openMenuId: menuIsAlreadyOpen ? 0 : menuId,
      };
    });
  },
}));
