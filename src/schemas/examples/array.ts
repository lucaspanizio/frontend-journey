import * as yup from 'yup';

const personSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  age: yup
    .number()
    .positive('Idade deve ser um número positivo')
    .integer('Idade deve ser um número inteiro')
    .required('Idade é obrigatória'),
});

const peopleSchema = yup
  .array()
  .of(personSchema) // poderia ser definido diretamente aqui
  .min(1, 'O array deve conter pelo menos um elemento');

// Entrada
const peopleData = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
];

peopleSchema
  .validate(peopleData, { abortEarly: false })
  .then(() => {
    console.log('Dados válidos!');
  })
  .catch((err) => {
    console.log('Erro de validação:', err.errors);
  });
