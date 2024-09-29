import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Layout } from '../components/templates/Layout';
import { CompoundPattern } from '../pages/CompoundPattern';
import { NotFound } from '../pages/NotFound';
import { ROUTES } from '../keys/routes';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<CompoundPattern />} />
        <Route path={ROUTES.COMPOUND_PATTERN} element={<CompoundPattern />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
