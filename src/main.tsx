import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/global.css';
import MainPage from '@/pages/MainPage.tsx';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { HashRouter as Router, Routes, Route } from 'react-router';
import ProjectPage from '@/pages/ProjectPage.tsx';
import Background from '@/components/Background.tsx';
import PrevLocationProvider from '@/context/PrevLocationProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Background />
      <PrevLocationProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<MainPage />}
            />
            <Route
              path='/project/:slug'
              element={<ProjectPage />}
            />
          </Routes>
        </Router>
      </PrevLocationProvider>
    </QueryClientProvider>
  </StrictMode>
);
