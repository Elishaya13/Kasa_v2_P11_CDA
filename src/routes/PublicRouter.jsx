import { createBrowserRouter } from 'react-router-dom';

import About from '../pages/about/About';
import Apart from '../pages/apart/Apart';
import Home from '../pages/home/Home';
import Layout from '../pages/Layout';
import NotFound from '../pages/notFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [        
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/logements/:apartId', element: <Apart /> },
            { path: '/error', element: <NotFound /> },
            { path: '*', element: <NotFound /> },
           
        ],
    },    
]);
    
export default router;