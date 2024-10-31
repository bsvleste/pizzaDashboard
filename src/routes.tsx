import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { SignInLayout } from "./pages/_layouts/auth";
import { NotFound } from "./pages/app/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { Error } from "./pages/app/error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <SignInLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
