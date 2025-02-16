import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/organisms/Sidebar'
import { usePageTitle } from '@/hooks/usePageTitle'

import * as S from './styles'

export const Layout: React.FC = () => {
  usePageTitle()

  return (
    <S.Container>
      <Sidebar />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  )
}
