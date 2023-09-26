import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../component/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="bg-orange-50 h-screen">
          <Header />
          <div className="p-8 max-w-xl mx-auto">
            <Outlet />
          </div>
        </div>
      </>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  //   { path: "/", element: <h1>Home page</h1> },
  //   { path: "/login", element: <h1>Login Page</h1> },
  //   { path: "/register", element: <h1>Register Page</h1> },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
