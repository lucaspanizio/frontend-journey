import { useState } from 'react'

import * as S from './styles'

interface IModalErrorProps {
  error: Error
  closeModal: () => void
}

export const ModalError = ({ error, closeModal }: IModalErrorProps) => {
  const [isStackVisible, setStackVisible] = useState(false)

  const getFilePath = () => {
    if (error && error.stack) {
      const match = error.stack.match(/at (.+?)(:\d+:\d+)/)
      if (match) {
        const fullPath = match[1].trim()
        return fullPath.replace(/^.*\/src\//, 'src/')
      }
    }
    return 'No file path found'
  }

  const getStackTrace = () => {
    if (error && error.stack) {
      return error.stack
        .split('\n')
        .slice(1)
        .map((line) => line.trim())
        .join('\n')
    }
    return 'No stack trace available'
  }

  return (
    <S.Backdrop onClick={closeModal}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.CloseButton onClick={closeModal}>×</S.CloseButton>
        </S.Header>

        <S.Content>
          <S.Message>
            <h2>{error.name}</h2>
            <p>{error.message}</p>
          </S.Message>

          <S.Source>
            <h2>Source</h2>
            <p>{getFilePath()}</p>
          </S.Source>

          <S.Stack>
            <h2>Call Stack</h2>
            <p onClick={() => setStackVisible(!isStackVisible)}>
              {isStackVisible ? 'Hide collapsed frames' : 'Show collapsed frames'}
            </p>
            {isStackVisible && <pre>{getStackTrace()}</pre>}
          </S.Stack>
        </S.Content>
      </S.Wrapper>
    </S.Backdrop>
  )
}
