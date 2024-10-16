import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Articles from "./pages/Articles";
import Layout from "./components/Layout";
import LayoutProtected from "./components/LayoutProtected";
import { QueryClient, QueryClientProvider } from "react-query";
import MyArticles from "./pages/MyArticles";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <LayoutProtected />,
        children: [
          {
            path: "",
            element: <Articles />,
          },
          {
            path: "articles",
            element: <Articles />,
          },
          {
            path: "manage-articles",
            element: <MyArticles />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
