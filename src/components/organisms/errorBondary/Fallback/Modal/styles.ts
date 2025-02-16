import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.components.errorBoundary.backdropColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.components.errorBoundary.modalBackground};
  width: 90%;
  max-width: 600px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const Header = styled.div`
  position: relative;
  border-top: 4px solid ${({ theme }) => theme.components.errorBoundary.headerBorderTop};
  padding: 1rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.components.errorBoundary.closeButtonColor};
  font-size: 1.5rem;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0 1rem;
  text-align: left;
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
  }
`

export const Message = styled.section`
  p {
    color: ${({ theme }) => theme.components.errorBoundary.messageText};
    border-left: 3px solid ${({ theme }) => theme.components.errorBoundary.messageBorder};
    background-color: ${({ theme }) => theme.components.errorBoundary.messageBackground};
    padding: 1rem;
  }
`

export const Source = styled.section`
  p {
    background-color: ${({ theme }) => theme.components.errorBoundary.sourceBackground};
    color: ${({ theme }) => theme.components.errorBoundary.sourceText};
    padding: 1rem;
  }
`

export const Stack = styled.section`
  p {
    cursor: pointer;
    border: none;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.components.errorBoundary.stackText};
  }

  pre {
    margin-top: 0.5rem;
    max-height: 150px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: ${({ theme }) => theme.components.errorBoundary.preBackground};
  }
`
