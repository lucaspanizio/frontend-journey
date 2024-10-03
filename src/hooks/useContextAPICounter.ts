import { useContext } from 'react';
import { CounterContext, ICounterContext } from '@/store/context/counter';

export const useContextAPICounter = (): ICounterContext => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter deve ser utilizado dentro de CounterProvider');
  }

  return context;
};
