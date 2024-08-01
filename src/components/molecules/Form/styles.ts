import styled, { css } from 'styled-components';

type TButtonVariant = 'confirm' | 'deny';
type TButtonSize = 'sm' | 'md' | 'lg';

const ButtonVariant = {
  confirm: css`
    background-color: #a3e635;
  `,
  deny: css`
    background-color: #dc2626;
    color: #fafafa;
  `,
};

const ButtonSize = {
  sm: css`
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  `,
  md: css`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  `,
  lg: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  `,
};

type ButtonProps = {
  size?: TButtonSize;
  variant?: TButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: min-content;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  ${({ size }) => size && ButtonSize[size]}
  ${({ variant }) => variant && ButtonVariant[variant]}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;
