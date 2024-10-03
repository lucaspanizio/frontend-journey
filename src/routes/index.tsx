import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Layout } from '../components/templates/Layout';
import { NotFound } from '../pages/NotFound';
import { StateManagers } from '../pages/StateManagers';
import { NotFound } from '../pages/NotFound';
import { StateManagers } from '../pages/StateManagers';
import { CompoundPattern } from '../pages/CompoundPattern';
import { usePageTitle } from '../hooks/usePageTitle';
import { ROUTES } from '../keys/routes';

export const Routes: React.FC = () => {
  usePageTitle();

  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<CompoundPattern />} />
        <Route path={ROUTES.COMPOUND_PATTERN} element={<CompoundPattern />} />
        <Route path={ROUTES.STATE_MANAGERS} element={<StateManagers />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
