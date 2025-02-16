import { useContextAPICounter } from '@/hooks/useContextAPICounter'
import { useZustandCounter } from '@/store/zustand/counter'
import { useReduxCounter } from '@/hooks/useReduxCounter'
import { Counter } from '@/components/molecules/Counter'
import { Flex } from '@/components/atoms/Flex'
import { Box } from '@/components/atoms/Box'

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
