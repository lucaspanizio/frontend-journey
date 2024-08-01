import React from 'react';
import { TriangleAlertIcon } from 'lucide-react';
import { CommCard as Card } from '../../components/molecules/CommCard';
import { Form } from '../../components/molecules/Form';
import { CodeViewer } from '../../components/atoms/CodeViewer';
import { codeString } from './settings';
import { Flex } from '../../components/atoms/Flex';

export const Traditional: React.FC = () => {
  return (
    <Flex flex={1}>
      <Card
        icon={<TriangleAlertIcon color="#fde047" />}
        title="Traditional Example"
        subtitle="Esse é um exemplo de componente tradicional"
      >
        <Form />
      </Card>

      <Card>
        <CodeViewer code={codeString} />
      </Card>
    </Flex>
  );
};
