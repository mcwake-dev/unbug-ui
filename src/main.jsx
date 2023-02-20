import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from "./routes/root";
import ErrorPage from './error-page';
import './index.css';
import BrowseApps from './routes/apps/browse';
import ReadApp from "./routes/apps/read";
import AddApp from './routes/apps/add';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/apps",
      element: <BrowseApps />
    },
    {
      path: "/apps/:appId",
      element: <ReadApp />
    },
    {
      path: "/apps/new",
      element: <AddApp />
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
