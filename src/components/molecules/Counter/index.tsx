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
        <S.DecButton onClick={decrement}>
          <MinusIcon />
        </S.DecButton>
        <S.ResetButton onClick={reset}>
          <UndoIcon />
        </S.ResetButton>
        <S.IncButton onClick={increment}>
          <PlusIcon />
        </S.IncButton>
      </Flex>
    </S.Wrapper>
  );
};
