import * as ReactRouterDom from 'react-router-dom'
import {routes} from "@/app/routes/rooutes.tsx";

const router = ReactRouterDom.createBrowserRouter(routes);

const RouterProvider = () => {
    return <ReactRouterDom.RouterProvider router={router}/>
}

export default RouterProvider;