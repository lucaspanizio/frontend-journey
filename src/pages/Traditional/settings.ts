export const codeString = `import React from 'react';
import { TriangleAlertIcon } from 'lucide-react';
import { CommCard as Card } from '../../components/molecules/CommCard';
import { Form } from '../../components/molecules/Form';

export const Traditional: React.FC = () => {
  return (
    <Card
      icon={<TriangleAlertIcon color="#fde047" />}
      title="Traditional Example"
      subtitle="Esse componente é um exemplo de componente tradicional"
    >
      <Form />
    </Card>
  );
};
`;
