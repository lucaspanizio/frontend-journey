import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux';
import { decrement, increment, reset } from '../store/redux/counter';

export const useReduxCounter = () => {
  const dispatch: AppDispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};
