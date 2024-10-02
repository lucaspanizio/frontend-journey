import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { ContextAPI } from '../pages/ContextAPI';
import { ReduxToolkit } from '../pages/ReduxToolkit';
import { Zustand } from '../pages/Zustand';
import { Layout } from '../components/templates/Layout';
import { CompoundPattern } from '../pages/CompoundPattern';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<CompoundPattern />} />
        <Route path="/compound-pattern" element={<CompoundPattern />} />
        <Route path="/context-api" element={<ContextAPI />} />
        <Route path="/redux-toolkit" element={<ReduxToolkit />} />
        <Route path="/zustand" element={<Zustand />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
