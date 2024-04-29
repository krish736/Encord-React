import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Login from "./components/Login.jsx";
import SingUp from "./components/SingUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <WelcomeMessage /> }, // Always point to WelcomeMessage
      {
        path: "/view-post",
        element: <PostList />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        // loader: CreatePostAction,
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Sign-up",
        element: <SingUp/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
