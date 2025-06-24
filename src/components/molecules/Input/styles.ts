import { css, styled } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: ${theme.colors.error};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem 1rem;
    border-radius: ${theme.radius.sm};
    border: 1px solid #ccc;
  `}
`
