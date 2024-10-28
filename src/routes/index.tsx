import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { ROUTES } from '@/keys/routes';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ErrorBoundary } from '@/components/organisms/errorBondary';
import { StateManagers } from '@/pages/StateManagers';
import { CompoundPattern } from '@/pages/CompoundPattern';
import { Layout } from '@/components/templates/Layout';
import { ErrorPage as Error } from '@/pages/Error';
import { NotFound } from '@/pages/NotFound';

export const Routes: React.FC = () => {
  usePageTitle();

  return (
    <ErrorBoundary>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route index element={<CompoundPattern />} />
          <Route path={ROUTES.COMPOUND_PATTERN} element={<CompoundPattern />} />
          <Route path={ROUTES.STATE_MANAGERS} element={<StateManagers />} />
          <Route
            path={ROUTES.ERROR_BOUNDARY}
            element={
              <ErrorBoundary>
                <Error />
              </ErrorBoundary>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Router>
    </ErrorBoundary>
  );
};
