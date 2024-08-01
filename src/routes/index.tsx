import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Compound } from '../pages/Compound';
import { Traditional } from '../pages/Traditional';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../components/templates/Layout';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Compound />} />
        <Route path="/compound" element={<Compound />} />
        <Route path="/traditional" element={<Traditional />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
