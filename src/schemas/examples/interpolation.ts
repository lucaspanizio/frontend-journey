import * as yup from 'yup';

const baseSchema = yup.object({
  name: yup.string().required(),
});

const extendedSchema = baseSchema.shape({
  age: yup.number(),
});

const { fields } = extendedSchema.describe();
console.log(JSON.stringify(fields, null, 2));
