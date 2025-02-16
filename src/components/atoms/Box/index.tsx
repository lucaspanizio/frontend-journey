import { PropsWithChildren } from 'react'
import { WithoutDollarPrefix } from '@/types/dolarPrefix'
import { addDollarPrefix } from '@/utils/dolarPrefix'
import * as S from './styles'

// Alternativa para que as props de estilo não passem para o DOM
interface IBoxProps extends WithoutDollarPrefix<S.BoxProps> {}

export const Box = ({ children, ...rest }: PropsWithChildren<IBoxProps>) => {
  return <S.Container {...addDollarPrefix(rest)}>{children}</S.Container>
}
