import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MENUS } from '@/store/zustand/sidebar';

export const usePageTitle = () => {
  const { pathname } = useLocation();
  const title = `Frontend Journey | ${
    MENUS.find((menu) => menu.path === pathname)?.title
  }`;

  MENUS;
  useEffect(() => {
    document.title = title;
  }, [pathname, title]);
};
