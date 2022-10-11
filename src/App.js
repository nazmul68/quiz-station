import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import UnPreparedMsgPage from "./components/UnPreparedMsgPage/UnPreparedMsgPage";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Home></Home>,
        },
        {
          path: "/topics",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/opps",
          element: <UnPreparedMsgPage></UnPreparedMsgPage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
