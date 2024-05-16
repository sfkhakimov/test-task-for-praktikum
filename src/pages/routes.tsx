import { Navigate, RouteObject } from 'react-router-dom'
import { PostsPage } from 'src/pages/posts'
import { PostPage } from 'src/pages/post'

export const routes: RouteObject[] = [
    {
        path: '',
        element: <Navigate to="/posts" />,
    },
    {
        path: 'posts',
        children: [
            {
                path: '',
                element: <PostsPage />,
            },
            {
                path: ':id',
                element: <PostPage />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/404" />,
    },
    {
        path: '404',
        element: <div>Ой, страница не найдена</div>,
    },
]
