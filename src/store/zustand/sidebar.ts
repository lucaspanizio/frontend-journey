import { create } from 'zustand'
import { MenuItem } from '@/components/organisms/Sidebar/MenuItem'
import { ROUTES } from '@/keys/routes'

interface SidebarStore {
  menus: MenuItem[]
  collapsed: boolean
  openMenuId: number
  toggle: () => void
  toggleSubmenu: (menuId: number) => void
}

export const MENUS = [
  { id: 1, path: ROUTES.COMPOUND_PATTERN, title: 'Compound Pattern' },
  { id: 2, path: ROUTES.STATE_MANAGERS, title: 'Gerenciadores de Estado' },
  { id: 3, path: ROUTES.ERROR_BOUNDARY, title: 'Error Boundary' },
]

const initialState = {
  collapsed: false,
  openMenuId: 0,
  menus: MENUS,
}

export const useSidebar = create<SidebarStore>()((set) => ({
  ...initialState,
  toggle: () => {
    set((state) => {
      const collapsed = !state.collapsed
      const hasSubmenuOppened = !!state.openMenuId
      return {
        ...state,
        collapsed,
        openMenuId: hasSubmenuOppened ? 0 : state.openMenuId,
      }
    })
  },
  toggleSubmenu: (menuId: number) => {
    set((state) => {
      const menuIsAlreadyOpen = menuId === state.openMenuId
      return {
        ...state,
        openMenuId: menuIsAlreadyOpen ? 0 : menuId,
      }
    })
  },
}))
