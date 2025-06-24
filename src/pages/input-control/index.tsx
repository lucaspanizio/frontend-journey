import * as yup from 'yup'
import { useState } from 'react'
import { useForm as useRHF } from 'react-hook-form'
import { useForm as useTSF } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '@/components/molecules/Input'
import { Flex } from '@/components/atoms/Flex'
import { Box } from '@/components/atoms/Box'

type YupValidator = ReturnType<typeof yupValidator>

const schema = yup.object({
  username: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'Informe no mínimo 3 caracteres')
    .max(6, 'Informe no máximo 6 caracteres'),
})

export const InputControl = () => {
  const [nome, setNome] = useState('')
  const [error, setError] = useState<string | undefined>('')

  // ✅ React Hook Form
  const {
    register,
    formState: { errors },
  } = useRHF<{ username: string }>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  // ✅ TanStack Form
  const form = useTSF<{ username: string }, YupValidator>({
    validatorAdapter: yupValidator(),
    validators: { onChange: schema },
  })

  return (
    <Box>
      <Flex gap={30}>
        {/* RHF */}
        <fieldset>
          <legend>React Hook Form</legend>
          <Input placeholder="Jhon Doe" {...register('username')} error={errors.username?.message} />
        </fieldset>

        {/* TSF */}
        <form.Field
          name="username"
          children={({ state: { value, meta }, handleChange }) => (
            <fieldset>
              <legend>TanStack Form</legend>
              <Input
                placeholder="Jhon Doe"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                error={meta.errors[0]?.toString().split(',')[0]}
              />
            </fieldset>
          )}
        />

        {/* Simple State */}
        <fieldset>
          <legend>State manual</legend>
          <Input
            placeholder="Jhon Doe"
            value={nome}
            error={error}
            onChange={({ target }) => {
              const value = target.value
              setNome(value)
              setError(validate(value))
            }}
          />
        </fieldset>
      </Flex>
    </Box>
  )
}

function validate(value: string) {
  if (!value.trim()) return 'Campo obrigatório'
  if (value.length < 3) return 'Informe no mínimo 3 caracteres'
  if (value.length > 6) return 'Informe no máximo 6 caracteres'
  return undefined
}
