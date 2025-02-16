import * as yup from 'yup'

const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, '') // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false // Valida tamanho e sequência repetida

  let sum = 0
  let remainder

  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i)
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.substring(9, 10))) return false

  sum = 0
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i)
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.substring(10, 11))) return false

  return true
}

yup.addMethod(yup.string, 'isCPF', function (message) {
  return this.test('isCPF', message || 'CPF inválido', function (value) {
    const { path, createError } = this
    return value ? isValidCPF(value) : createError({ path, message: message || 'CPF inválido' })
  })
})

// Module Augmentation:
// Quando você usa declare module com um módulo existente, você não está sobrescrevendo,
// mas sim adicionando novas propriedades ou métodos à interface ou tipo já existente.
declare module 'yup' {
  interface StringSchema {
    isCPF(message?: string): this
  }
}

const schema = yup.object({
  cpf: yup.string().isCPF().required(),
})

// Entrada
const data = { cpf: '486.322.270-09' }

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
