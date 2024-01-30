import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound";
import Wordle from "./pages/Words/Wordle";
import Header from "./components/Header/Header";
import { PageContainer } from "./assets/layouts/layout.style";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/games",
        element: <Main />,
      },
      {
        path: "/wordle",
        element: <Wordle />,
      },
      {
        path: "/mine",
        element: <Main />,
      },
      {
        path: "/jumping",
        element: <Main />,
      },
      {
        path: "/pingpong",
        element: <Main />,
      },
      {
        path: "/quiz",
        element: <Main />,
      },
      {
        path: "/ranking",
        element: <Main />,
      },
      {
        path: "/community",
        element: <Main />,
      },
      {
        path: "/notices",
        element: <Main />,
      },
    ],
  },
]);

const App: React.FC = () => {
  const theme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
