
import type { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import About from '../pages/about/page';
import Services from '../pages/services/page';
import Inventory from '../pages/inventory/page';
import Contact from '../pages/contact/page';
import FAQs from '../pages/faqs/page';
import Admin from '../pages/admin/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/faqs',
    element: <FAQs />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
