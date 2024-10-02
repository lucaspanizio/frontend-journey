import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const initialState = {
  count: 0,
};

export const useZustandCounter = create<CounterStore>()((set) => ({
  ...initialState,
  increment: () => set((state) => ({ ...state, count: (state.count += 1) })),
  decrement: () => set((state) => ({ ...state, count: (state.count -= 1) })),
  reset: () => set((state) => ({ ...state, count: 0 })),
}));
