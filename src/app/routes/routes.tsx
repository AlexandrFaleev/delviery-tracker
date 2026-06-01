import {AuthPage, HomePage, OrderPage, ProfilePage, UiKit} from "@/pages";
import ProtectedRoute from "@/app/routes/ProtectedRoute.tsx";

export const routes = [
    {
        path: '/',
        element: <ProtectedRoute><HomePage/></ProtectedRoute>
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
        element: <ProtectedRoute><ProfilePage/></ProtectedRoute>
    },
    {
        path: '/order/:id',
        element: <ProtectedRoute><OrderPage/></ProtectedRoute>
    }
]