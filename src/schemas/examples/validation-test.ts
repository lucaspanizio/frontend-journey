import * as yup from 'yup'

const numberSchema = yup.number().test('is-42', 'Esse não é o número 42', (value) => value === 42)

// Entrada
const dataNumber = 45

try {
  numberSchema.validateSync(dataNumber)
  console.log('Dados válidos no schema numérico!')
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors)
  } else {
    console.error('Erro inesperado:', err)
  }
}

///////////////////////////////////////////////////////////////////////////////

const passSchema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup.string().test('passwords-match', 'As senhas devem ser iguais', function (value) {
    return value === this.parent.password
  }),
})

// Entrada
const dataPasswords = { password: '1234', confirmPassword: '123456' }

try {
  passSchema.validateSync(dataPasswords)
  console.log('Dados válidos no schema das senhas!')
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors)
  } else {
    console.error('Erro inesperado:', err)
  }
}
