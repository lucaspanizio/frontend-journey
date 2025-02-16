import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ef4444;
`

export const Message = styled.p`
  font-size: 1.2rem;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`

export const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

export const ToastButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 0;
  margin: 1rem;
  width: 45px;
  height: 45px;
  cursor: pointer;
  user-select: none;
  color: #fafafa;
  background-color: #ef4444;
  border-radius: 50%;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    width: 110px;
    border-radius: 20px;
    background-color: #c83535;
    transition:
      width 0.3s ease 0.1s,
      border-radius 0.3s ease 0.1s;
  }

  &::after {
    font-size: 1.25rem;
    content: '!';
  }

  /* O texto só muda se o hover persistir por 0.1s */
  &:hover::after {
    animation: changeText 0.1s forwards;
    animation-delay: 0.1s;
  }

  @keyframes changeText {
    100% {
      font-size: 1rem;
      content: 'Show more';
    }
  }
`
