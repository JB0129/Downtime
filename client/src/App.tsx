import React from "react";
import { ThemeProvider } from "styled-components";
import { themeAtom } from "./styles/theme";
import Words from "./pages/Words/Words";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header/Header";
import { useRecoilValue } from "recoil";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
        // children: [],
      },
      {
        path: "/signup",
        element: <SignUp />,
        // children: [],
      },
      {
        element: <Header />,
        children: [
          {
            path: "/home",
            element: <>home</>,
          },
          {
            path: "/words",
            element: <Words />,
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
