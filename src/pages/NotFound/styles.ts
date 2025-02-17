import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 1rem;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
    color: ${colors.text};
  `};
`

export const ErrorCode = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: #dc3545;
`

export const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 2rem;
`

export const Button = styled.button`
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
