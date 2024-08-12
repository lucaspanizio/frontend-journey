import * as yup from 'yup';

const schema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^\(\d{2}\) \d{4}-\d{4}$/, 'Número de telefone inválido')
    .required('Número de telefone é obrigatório'),
});

// Entrada
const data = {
  phoneNumber: '(12) 3456-7890',
};

schema
  .validate(data)
  .then(() => console.log('Dados válidos!'))
  .catch(({ errors }) => console.log('Erro de validação:', errors));
