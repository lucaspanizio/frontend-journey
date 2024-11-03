import { CSSProperties, styled } from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { Color } from '@/types/color';

export interface BoxProps extends MarginProps {
  $gap?: CSSProperties['gap'] | number;
  $backgroundColor?: Color;
}

export const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;

  border-radius: ${({ theme }) => theme.radius.md};
  gap: ${({ $gap }) =>
    typeof $gap === 'number' ? `${$gap}px` : $gap || '0.5rem'};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? '#111827'};

  ${margin}
`;
