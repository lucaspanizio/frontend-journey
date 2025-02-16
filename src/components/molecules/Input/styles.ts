import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.colors.error};
  }
`

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid #ccc;
`
