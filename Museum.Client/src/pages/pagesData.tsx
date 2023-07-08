import { routerType } from './../types/routerType'
import {HomePage, BlogPage} from './index'

const pagesData: routerType[] = [
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