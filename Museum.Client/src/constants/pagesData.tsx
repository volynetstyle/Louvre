import { IRouterType } from '../types/interfaces'
import { HomePage, BlogPage } from '../pages'

const pagesData: IRouterType[] = [
    {
        path: "/",
        element: <HomePage />,
        title: "home"
    },
    {
        path: "/blog",
        element: <BlogPage />,
        title: "blog"
    }
];

export default pagesData;