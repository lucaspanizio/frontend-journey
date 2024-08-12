import * as yup from 'yup';

const addressSchema = yup.object({
  street: yup.string().required(),
  city: yup.string().required(),
});

const userSchema = yup.object({
  name: yup.string().required(),
  address: addressSchema,
});

const { fields } = userSchema.describe();
console.log(JSON.stringify(fields, null, 2));
