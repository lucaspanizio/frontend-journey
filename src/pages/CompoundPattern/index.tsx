import { CircleCheckBigIcon, TriangleAlertIcon } from 'lucide-react'

import { Box } from '@/components/atoms/Box'
import { Flex } from '@/components/atoms/Flex'
import { Typography } from '@/components/atoms/Typograph'
import { Card } from '@/components/molecules/Card'
import { CommCard } from '@/components/molecules/CommCard'
import { Form } from '@/components/molecules/Form'
import { useTheme } from '@/store/context/theme'

export const CompoundPattern = () => {
  const { theme } = useTheme()

  return (
    <Box gap={30}>
      <Flex gap={50} flexWrap="wrap">
        <Card>
          <Card.Title color="text.light">
            <Flex alignItems="center">
              <CircleCheckBigIcon color={theme.colors.primary} />
              Compound Example
            </Flex>
          </Card.Title>

          <Card.Subtitle>Esse é um exemplo de componente de composição</Card.Subtitle>

          <Form />
        </Card>

        <CommCard
          icon={<TriangleAlertIcon color={theme.colors.warning} />}
          title="Traditional Example"
          subtitle="Esse é um exemplo de componente tradicional"
        >
          <Form />
        </CommCard>
      </Flex>

      <section>
        <Typography variant="p">
          Visualmente, o efeito é o mesmo, entretanto o card tradicional é muito mais complexo de ajustar, seja para
          incluir subcomponentes ou reposicionar os existentes.
        </Typography>

        <Typography variant="p">
          Um exemplo é o ícone ao lado do título. Para que seja possível opcionalmente exibi-lo à esquerda ou à direita
          do título, seria necessário criar uma nova propriedade no componente <code>CommCard</code> como{' '}
          <code>positionIcon</code> ou desmembrar em duas como <code>startIcon</code> e <code>endIcon</code>.
        </Typography>

        <Typography variant="p">
          No componente que utiliza o <strong>compound pattern</strong>, não teríamos essa dificuldade, já que o title
          recebe um <code>children</code>, um conjunto de elementos na ordem que preferirmos.
        </Typography>
      </section>
    </Box>
  )
}
