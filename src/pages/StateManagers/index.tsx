import { Box } from '@/components/atoms/Box'
import { Flex } from '@/components/atoms/Flex'
import { Counter } from '@/components/molecules/Counter'
import { useContextAPICounter } from '@/hooks/useContextAPICounter'
import { useReduxCounter } from '@/hooks/useReduxCounter'
import { useZustandCounter } from '@/store/zustand/counter'

export const StateManagers = () => {
  const context = useContextAPICounter()
  const zustand = useZustandCounter()
  const redux = useReduxCounter()

  return (
    <Box>
      <Flex gap={50}>
        <Flex flexDirection="column" alignItems="center">
          <strong>Context API</strong>
          <Counter {...context} />
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <strong>Redux Toolkit</strong>
          <Counter {...redux} />
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <strong>Zustand</strong>
          <Counter {...zustand} />
        </Flex>
      </Flex>
    </Box>
  )
}
