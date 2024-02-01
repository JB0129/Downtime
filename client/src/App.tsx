import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import { PageContainer } from "./assets/layouts/layout.style";
import Games from "./pages/Games/Games";
import Wordle from "./pages/Wordle/Wordle";
import Quiz from "./pages/Quiz/Quiz";
import Pingpong from "./pages/Pingpong/Pingpong";
import Jumping from "./pages/Jumping/Jumping";
import Ranking from "./pages/Ranking/Ranking";
import Community from "./pages/Community/Community";
import Notices from "./pages/Notices/Notices";
import Minesweeper from "./pages/Minesweeper/Minesweeper";

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
        element: <Games />,
      },
      {
        path: "/wordle",
        element: <Wordle />,
      },
      {
        path: "/minesweeper",
        element: <Minesweeper />,
      },
      {
        path: "/jumping",
        element: <Jumping />,
      },
      {
        path: "/pingpong",
        element: <Pingpong />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/notices",
        element: <Notices />,
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
