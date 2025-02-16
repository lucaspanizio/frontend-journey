import { PropsWithChildren } from 'react'

import * as S from './styles'

interface ITypographyProps extends S.TypographProps {}

export const Typography = ({ variant, color, children }: PropsWithChildren<ITypographyProps>) => {
  return (
    <S.Typography as={variant} color={color} variant={variant}>
      {children}
    </S.Typography>
  )
}
