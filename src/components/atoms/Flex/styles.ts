import styled, { CSSProperties } from 'styled-components'
import { space, layout, flexbox, compose, SpaceProps, LayoutProps, FlexboxProps } from 'styled-system'

type StyleProps = SpaceProps & LayoutProps & FlexboxProps

export type FlexProps = StyleProps & {
  gap?: CSSProperties['gap'] | number
}

export const Container = styled('div').withConfig({
  shouldForwardProp: (prop) => !['flexWrap', 'alignItems', 'marginTop'].includes(prop),
})<FlexProps>`
  display: flex;
  gap: ${({ gap }) => (typeof gap === 'number' ? `${gap}px` : gap || '0.5rem')};

  ${compose(space, layout, flexbox)};
`
