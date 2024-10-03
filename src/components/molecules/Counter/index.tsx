import { MinusIcon, PlusIcon, UndoIcon } from 'lucide-react';
import { Flex } from '../../atoms/Flex';
import * as S from './styles';

interface ICounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const Counter = ({
  count,
  increment,
  decrement,
  reset,
}: ICounterProps) => {
  return (
    <S.Wrapper>
      <S.Display value={count} />
      <Flex>
        <S.Button variant="dec" onClick={decrement}>
          <MinusIcon />
        </S.Button>
        <S.Button variant="reset" onClick={reset}>
          <UndoIcon />
        </S.Button>
        <S.Button variant="inc" onClick={increment}>
          <PlusIcon />
        </S.Button>
      </Flex>
    </S.Wrapper>
  );
};
