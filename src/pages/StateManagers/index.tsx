import { Box } from '../../components/atoms/Box';
import { useCounter } from '../../store/context/counter';
import { Counter } from '../../components/molecules/Counter';
import { Flex } from '../../components/atoms/Flex';

export const StateManagers = () => {
  const context = useCounter();

  return (
    <Box>
      <Flex gap={50}>
        <Flex flexDirection="column" alignItems="center">
          <strong>Context API</strong>
          <Counter {...context} />
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <strong>Redux Toolkit</strong>
          <Counter {...context} />
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <strong>Zustand</strong>
          <Counter {...context} />
        </Flex>
      </Flex>
    </Box>
  );
};
