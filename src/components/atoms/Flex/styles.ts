import styled from 'styled-components';
import {
  space,
  layout,
  flexbox,
  compose,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

type StyleProps = SpaceProps & LayoutProps & FlexboxProps;

export type FlexProps = StyleProps & {
  gap?: number;
};

export const Container = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap }) => (gap !== undefined ? `${gap}px` : '0.5rem')};

  ${compose(space, layout, flexbox)};
`;
