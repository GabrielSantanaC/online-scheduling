import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Card';

export default function Index({ title, children }) {
  return (
    <Container className="mt-4">
      <Card title={title}>{children}</Card>
    </Container>
  );
}
