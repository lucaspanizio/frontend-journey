import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MENUS } from '@/store/zustand/sidebar'

export const usePageTitle = () => {
  const { pathname } = useLocation()

  const appName = 'Frontend Journey'
  const foundMenu = MENUS.find((menu) => menu.path === pathname)
  const title = foundMenu ? `${appName} | ${foundMenu.title}` : appName

  useEffect(() => {
    document.title = title
  }, [pathname, title])
}
