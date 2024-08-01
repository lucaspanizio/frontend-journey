import React from 'react';
import { CircleCheckBigIcon } from 'lucide-react';
import { Card } from '../../components/molecules/Card';
import { Flex } from '../../components/atoms/Flex';
import { Form } from '../../components/molecules/Form';
import { CodeViewer } from '../../components/atoms/CodeViewer';
import { codeString } from './settings';

export const Compound: React.FC = () => {
  return (
    <Flex flex={1}>
      <Card>
        <Card.Title>
          <Flex>
            <CircleCheckBigIcon color="#a3e635" />
            Compound Example
          </Flex>
        </Card.Title>

        <Card.Subtitle>
          Esse é um exemplo de componente de composição
        </Card.Subtitle>

        <Form />
      </Card>

      <Card>
        <CodeViewer code={codeString} />
      </Card>
    </Flex>
  );
};
