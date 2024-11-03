import { styled } from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { Color } from '../../../types/color';

export interface BoxProps extends MarginProps {
  gap?: number;
  backgroundColor?: Color;
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'gap',
})<BoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#111827'};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  gap: ${({ gap }) => (gap !== undefined ? `${gap}px` : '0.5rem')};
  ${margin}
`;
