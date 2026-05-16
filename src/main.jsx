import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from '@/App.jsx';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: '/react-portfolio-2026',
  },
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
