import { create } from 'zustand';
import { Counter } from '@/components/molecules/Counter';

const initialState = {
  count: 0,
};

export const useZustandCounter = create<Counter>()((set) => ({
  ...initialState,
  increment: () => set((state) => ({ ...state, count: (state.count += 1) })),
  decrement: () => set((state) => ({ ...state, count: (state.count -= 1) })),
  reset: () => set((state) => ({ ...state, count: 0 })),
}));
