import * as yup from 'yup'

const schema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
})

// Entrada
const data = { password: '1234', confirmPassword: '123456' }

try {
  schema.validateSync(data)
  console.log('Dados válidos!')
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors)
  } else {
    console.error('Erro inesperado:', err)
  }
}
