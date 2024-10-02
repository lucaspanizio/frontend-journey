import { create } from 'zustand';
import { MenuItem } from '../../components/organisms/Sidebar/MenuItem';

interface SidebarStore {
  menus: MenuItem[];
  collapsed: boolean;
  openMenuId: number;
  toggle: () => void;
  toggleSubmenu: (submenuId: number) => void;
}

const initialState = {
  collapsed: false,
  openMenuId: 0,
  menus: [
    { id: 1, path: '/compound', title: 'Compound Example' },
    { id: 2, path: '/traditional', title: 'Traditional Example' },
    {
      id: 3,
      title: 'Gerenciadores de Estado',
      submenus: [
        { id: 3.1, path: '/context-api', title: 'Context API' },
        { id: 3.2, path: '/redux-toolkit', title: 'Redux Toolkit' },
        { id: 3.3, path: '/zustand', title: 'Zustand' },
      ],
    },
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
