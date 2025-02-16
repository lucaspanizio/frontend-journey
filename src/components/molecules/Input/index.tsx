import { InputHTMLAttributes, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import * as S from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const Input = ({ name, ...props }: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = useMemo(() => {
    return errors[name]?.message
  }, [errors, name])

  return (
    <S.Container>
      <S.Input {...register(name)} {...props} />
      {error && <label>{error.toString()}</label>}
    </S.Container>
  )
}
