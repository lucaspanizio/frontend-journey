import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Flex } from '@/components/atoms/Flex'

import { Input } from '../Input'
import * as S from './styles'

const schema = yup.object({
  username: yup.string().required('Usuário é obrigatório!'),
  email: yup.string().email('Esse não é um email válido!').required('Email é obrigatório!'),
})

type FormValues = yup.InferType<typeof schema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form data', data)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Flex marginTop={10}>
        <Input placeholder="Jhon Doe" {...register('username')} error={errors.username?.message?.toString()} />
        <Input placeholder="jhon.doe@email.com" {...register('email')} error={errors.email?.message?.toString()} />
      </Flex>

      <Flex>
        <S.Button type="button" variant="deny" size="md">
          Cancelar
        </S.Button>
        <S.Button type="submit" variant="confirm" size="md">
          Confirmar
        </S.Button>
      </Flex>
    </S.Form>
  )
}
