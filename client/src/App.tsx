import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Wordle from "./pages/Words/Wordle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: (
          <>
            <Header />
            <Outlet />
          </>
        ),
        children: [
          {
            path: "/login",
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
            path: "/wordle",
            element: <Wordle />,
          },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  const theme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
