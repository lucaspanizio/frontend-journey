import { useState } from 'react'
import { ZapIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useSidebar } from '@/store/zustand/sidebar'
import { Flex } from '@/components/atoms/Flex'
import * as S from './styles'

export type MenuItem = {
  id: number
  title: string
  path?: string
  submenus?: MenuItem[]
}

interface IMenuItemProps {
  data: MenuItem
}

export const MenuItem = ({ data: { id, path = '', title, submenus = [] } }: IMenuItemProps) => {
  const { pathname } = useLocation()
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const { openMenuId, toggleSubmenu, collapsed } = useSidebar()

  const isOpen = openMenuId === id
  const hasSubmenus = submenus.length > 0
  const isActive =
    id === 1 ? ['', '/', path].includes(pathname) : pathname === path || submenus.some((sub) => sub.path === pathname)

  const handleMouseEnter = () => setTooltipVisible(true)
  const handleMouseLeave = () => setTooltipVisible(false)
  const handleClick = () => toggleSubmenu(id)

  const content = (
    <Flex gap={0} alignItems="center">
      <S.MenuID>{id}</S.MenuID>
      <S.MenuTitle>{title}</S.MenuTitle>
    </Flex>
  )

  return (
    <S.MenuItem
      isActive={isActive}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {path ? <Link to={path}>{content}</Link> : content}

      <S.Tooltip isVisible={collapsed && isTooltipVisible}>{title}</S.Tooltip>
      {hasSubmenus && (
        <S.SubMenuContainer isOpen={isOpen}>
          {submenus.map(({ id: subId, path: subPath = '', title: subTitle }) => (
            <Link to={subPath} key={subId}>
              <S.SubMenu>
                <ZapIcon />
                {subTitle}
              </S.SubMenu>
            </Link>
          ))}
        </S.SubMenuContainer>
      )}
    </S.MenuItem>
  )
}
