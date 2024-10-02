import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Compound } from '../pages/Compound';
import { Traditional } from '../pages/Traditional';
import { NotFound } from '../pages/NotFound';
import { ContextAPI } from '../pages/ContextAPI';
import { ReduxToolkit } from '../pages/ReduxToolkit';
import { Zustand } from '../pages/Zustand';
import { Layout } from '../components/templates/Layout';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Compound />} />
        <Route path="/compound" element={<Compound />} />
        <Route path="/traditional" element={<Traditional />} />
        <Route path="/context-api" element={<ContextAPI />} />
        <Route path="/redux-toolkit" element={<ReduxToolkit />} />
        <Route path="/zustand" element={<Zustand />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
