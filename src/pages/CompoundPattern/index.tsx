import { CircleCheckBigIcon, TriangleAlertIcon } from 'lucide-react';
import { CommCard } from '@/components/molecules/CommCard';
import { Card } from '@/components/molecules/Card';
import { Flex } from '@/components/atoms/Flex';
import { Form } from '@/components/molecules/Form';
import { Box } from '@/components/atoms/Box';
import { Typography } from '@/components/atoms/Typograph';

export const CompoundPattern = () => {
  return (
    <Box gap={30}>
      <Flex gap={50} flexWrap="wrap">
        <Card>
          <Card.Title color="text.light">
            <Flex alignItems="center">
              <CircleCheckBigIcon color="#a3e635" />
              Compound Example
            </Flex>
          </Card.Title>

          <Card.Subtitle>
            Esse é um exemplo de componente de composição
          </Card.Subtitle>

          <Form />
        </Card>

        <CommCard
          icon={<TriangleAlertIcon color="#fde047" />}
          title="Traditional Example"
          subtitle="Esse é um exemplo de componente tradicional"
        >
          <Form />
        </CommCard>
      </Flex>

      <section>
        <Typography variant="p" color="#d4d4d8">
          Visualmente, o efeito é o mesmo, entretanto o card tradicional é muito
          mais complexo de ajustar, seja para incluir subcomponentes ou
          reposicionar os existentes.
        </Typography>

        <Typography variant="p" color="#d4d4d8">
          Um exemplo é o ícone ao lado do título. Para que seja possível
          opcionalmente exibi-lo à esquerda ou à direita do título, seria
          necessário criar uma nova propriedade no componente{' '}
          <code>CommCard</code> como <code>positionIcon</code> ou desmembrar em
          duas como <code>startIcon</code> e <code>endIcon</code>.
        </Typography>

        <Typography variant="p" color="#d4d4d8">
          No componente que utiliza o <strong>compound pattern</strong>, não
          teríamos essa dificuldade, já que o title recebe um{' '}
          <code>children</code>, um conjunto de elementos na ordem que
          preferirmos.
        </Typography>
      </section>
    </Box>
  );
};
