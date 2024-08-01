import { styled } from 'styled-components';
import { theme } from '../../../global/theme';
import { margin, MarginProps } from 'styled-system';

export interface CardProps extends MarginProps {
  gap?: number;
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #111827;
  border-radius: ${({ theme }) => theme.radius.md};
  gap: ${({ gap }) => (gap !== undefined ? `${gap}px` : '0.5rem')};
  ${margin}
`;

export const ContainerTitle = styled.div<CardProps>`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  gap: 0.8rem;
  ${margin}
`;

export type IconProps = {
  background?: keyof typeof theme.colors;
};

export const ContainerIcon = styled.div<IconProps>`
  display: flex;
  align-self: flex-start;
  padding: 0.8rem;

  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme, background }) =>
    background ? theme.colors[background] : theme.colors.primary};
`;

export type TitleProps = {
  color?: keyof typeof theme.colors | string;
};

export const Title = styled.h1<TitleProps>`
  display: flex;
  flex-direction: column;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.titleWhite};

  font-size: 1rem;
  font-weight: bold;

  & > * {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.span`
  display: flex;
  font-size: 0.825rem;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.textWhite};
`;
