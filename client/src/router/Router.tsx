import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { PATH } from '@constants/path';
import MainPage from '@pages/HomePage/HomePage';
import ResultPage from '@pages/ResultPage/ResultPage';
import GuidePage from '@pages/GuidePage/GuidePage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <Layout />,
      children: [
        {
          path: PATH.HOME,
          element: <MainPage />,
        },
        {
          path: PATH.GUIDE,
          element: <GuidePage />,
        },
        {
          path: PATH.RESULT,
          element: <ResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
