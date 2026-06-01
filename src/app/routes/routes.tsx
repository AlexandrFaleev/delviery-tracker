import {AuthPage, HomePage, OrderPage, ProfilePage, UiKit} from "@/pages";
import ProtectedRoute from "@/app/routes/ProtectedRoute.tsx";
import {OrdersProvider} from "@/entities/order";

export const routes = [
    {
        path: '/',
        element: <ProtectedRoute><OrdersProvider><HomePage/></OrdersProvider></ProtectedRoute>
    },
    {
        path: '/login',
        element: <AuthPage/>
    },
    {
        path: '/ui-kit',
        element: <ProtectedRoute><UiKit/></ProtectedRoute>
    },
    {
        path: '/profile',
        element: <ProtectedRoute><OrdersProvider><ProfilePage/></OrdersProvider></ProtectedRoute>
    },
    {
        path: '/order/:id',
        element: <ProtectedRoute><OrdersProvider><OrderPage/></OrdersProvider></ProtectedRoute>
    }
]