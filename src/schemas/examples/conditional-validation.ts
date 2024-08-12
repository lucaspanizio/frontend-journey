import * as yup from 'yup';

const schema = yup.object({
  isAdmin: yup.boolean(),
  adminCode: yup.string().when('isAdmin', {
    is: true,
    then: (schema) => schema.required('Admin code is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// Entrada
const data = { isAdmin: true };

try {
  schema.validateSync(data);
  console.log('tudo certo!');
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors);
  } else {
    console.error('Erro inesperado:', err);
  }
}
