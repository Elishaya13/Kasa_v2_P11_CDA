import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';

import NotFound from '../pages/notFound/NotFound.jsx';
import Layout from '../pages/Layout.jsx';
import About from '../pages/about/About.jsx';
import Apart from '../pages/apart/Apart.jsx';

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