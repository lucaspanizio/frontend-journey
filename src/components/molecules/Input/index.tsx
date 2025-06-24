import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ error, ...props }, ref) => {
  return (
    <S.Container>
      <S.Input ref={ref} {...props} />
      {error && <label>{error}</label>}
    </S.Container>
  )
})

Input.displayName = 'Input'
