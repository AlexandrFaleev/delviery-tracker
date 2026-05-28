import {AuthPage, HomePage, UiKit} from "@/pages";

export const routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: <AuthPage/>
    },
    {
        path: '/ui-kit',
        element: <UiKit/>
    }
]