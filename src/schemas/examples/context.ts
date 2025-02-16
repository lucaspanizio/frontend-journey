import * as yup from 'yup'

const schema = yup.object({
  age: yup
    .number()
    .optional()
    .when('$isStudent', {
      is: true,
      then: (schema) => schema.min(18, 'Estudantes devem ter pelo menos 18 anos'),
    }),
})

// Entradas
const data = { age: 17 }
const context = { isStudent: true }

try {
  schema.validateSync(data, { context })
  console.log('Dados válidos!')
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors)
  } else {
    console.error('Erro inesperado:', err)
  }
}
