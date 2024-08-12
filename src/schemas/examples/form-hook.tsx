import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
});

type FormValues = yup.InferType<typeof schema>;

export const FormComponent: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <form>
      <input {...form.register('username')} placeholder="Username" />
      <input {...form.register('email')} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};
