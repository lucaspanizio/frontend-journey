import { useSidebar } from '@/store/zustand/sidebar'

import { MenuItem } from '../MenuItem'
import * as S from './styles'

export const MenuList = () => {
  const { menus } = useSidebar()

  return (
    <S.MenuList>
      {menus.map((menu) => (
        <MenuItem key={menu.id} data={menu} />
      ))}
    </S.MenuList>
  )
}
