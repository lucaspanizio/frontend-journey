import * as yup from 'yup';

const baseSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  age: yup.number().required().nullable(),
});

const additionalSchema = yup.object({
  age: yup.number().positive().required('Idade é obrigatório'),
});

const combinedSchema = baseSchema.concat(additionalSchema);

const { fields } = combinedSchema.describe();
console.log(JSON.stringify(fields, null, 2));
