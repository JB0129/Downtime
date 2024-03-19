import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageContainer } from "./assets/layouts/layout.style";
import "./App.css";
import { alertAtom } from "./recoil/atoms";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Games from "./pages/Games/Games";
import Wordle from "./pages/Wordle/Wordle";
import Quiz from "./pages/Quiz/Quiz";
import FindMusic from "./pages/FindMusic/FindMusic";
import Jumping from "./pages/Jumping/Jumping";
import Ranking from "./pages/Ranking/Ranking";
import Community from "./pages/Community/Community";
import Minesweeper from "./pages/Minesweeper/Minesweeper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import AlertModal from "./assets/modal/Alert";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </>
    ),
    errorElement: <NotFound />,
    children: [
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/",
      //   element: <Main />,
      // },
      // {
      //   path: "/games",
      //   element: <Games />,
      // },
      {
        path: "/",
        element: <Wordle />,
      },
      {
        path: "/wordle",
        element: <Wordle />,
      },
      // {
      //   path: "/minesweeper",
      //   element: <Minesweeper />,
      // },
      // {
      //   path: "/jumping",
      //   element: <Jumping />,
      // },
      {
        path: "/music",
        element: <FindMusic />,
      },
      // {
      //   path: "/quiz",
      //   element: <Quiz />,
      // },
      // {
      //   path: "/ranking",
      //   element: <Ranking />,
      // },
      // {
      //   path: "/community",
      //   element: <Community />,
      // },
    ],
  },
]);

const App: React.FC = () => {
  const theme = useRecoilValue(themeAtom);
  const alert = useRecoilValue(alertAtom);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <RouterProvider router={router} />
        {alert && <AlertModal />}
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
