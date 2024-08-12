import * as yup from 'yup';

const userSchema = yup.object({
  name: yup.string().required(),
  age: yup.number().optional(),
});

type User = yup.InferType<typeof userSchema>;

const user: User = {
  age: 30,
  name: 'John Doe',
};

try {
  userSchema.validateSync(user);
  console.log('Dados válidos!');
  console.log(user);
} catch (err) {
  if (err instanceof yup.ValidationError) {
    console.log('Erro de validação:', err.errors);
  } else {
    console.error('Erro inesperado:', err);
  }
}
