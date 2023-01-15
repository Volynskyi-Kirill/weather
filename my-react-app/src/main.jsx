import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { Help } from './routes/help';
import './index.css';

import { createStore } from 'redux';
import { weatherApp } from './Redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(weatherApp);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <App /> },
            {
                path: 'weather',
                element: <App />,
            },
            {
                path: 'help',
                element: <Help />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
