import { routerType } from './../types/routerType'
import BlogPage from './blog/blog-page';
import HomePage from './home/home-page';

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