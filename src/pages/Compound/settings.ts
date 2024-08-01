export const codeString = `import React from 'react';
import { CircleCheckBigIcon } from 'lucide-react';
import { Card } from '../../components/molecules/Card';
import { Flex } from '../../components/atoms/Flex';
import { Form } from '../../components/molecules/Form';

export const Compound: React.FC = () => {
  return ( 
    <Card>
      <Card.Title>
        <Flex>
          <CircleCheckBigIcon color="#a3e635" />
          'Compound Example'
        </Flex>
      </Card.Title>

      <Card.Subtitle>
        'Esse componente é um exemplo de componente de composição'
      </Card.Subtitle>

      <Form />
    </Card>
  );
};
`;
