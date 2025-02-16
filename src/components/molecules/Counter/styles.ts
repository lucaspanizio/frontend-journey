import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
`

export const Display = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #fefefe;
  text-align: center;
  background-color: #334155;
  margin-bottom: 0.5rem;
  width: 100%;
`

interface IButtonProps {
  variant: 'inc' | 'dec' | 'reset'
}

export const Button = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<IButtonProps>`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'inc':
        return css`
          background-color: #4caf50;
        `
      case 'dec':
        return css`
          background-color: #f44336;
        `
      case 'reset':
        return css`
          color: black;
          background-color: #dedede;
        `
    }
  }}
`
