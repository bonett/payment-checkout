import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import PublicRouter from "Routers/Public";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(PublicRouter())
    );

    return <RouterProvider router={router} />
}

export default App;
