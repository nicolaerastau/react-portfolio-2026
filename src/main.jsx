import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from '@/App.jsx';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App serves as the shell layout
    children: [
      {
        index: true, // 2. Home is now the main entry page (/)
        element: <Home />,
      },
      {
        path: 'about', // 3. About moves to (/about)
        element: <About />,
      },
      {
        path: 'projects', // Accessible at /projects
        element: <Projects />,
      },
      {
        path: 'contact', // Accessible at /contact
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
