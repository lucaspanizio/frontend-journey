import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ICounterContext {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<ICounterContext>(
  {} as ICounterContext,
);

interface ICounterProvider {
  children: ReactNode;
}

export const CounterProvider: React.FC<ICounterProvider> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter deve ser utilizado dentro de CounterProvider');
  }

  return context;
};
