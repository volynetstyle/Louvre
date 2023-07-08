import { Route, Routes } from 'react-router-dom';
import { routerType } from './types/routerType';
import pagesData from './pages/pagesData';
import Layout from './components/layout/layout';
import { Error } from './pages';

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route element={<Layout />}>
        {pageRoutes}
      </Route>
      <Route key="not-found" path="*" element={<Error errorNum={404} />} />
    </Routes>
  );
};

export default Router;
