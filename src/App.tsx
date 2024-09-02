import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      errorElement: <div>error occur</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
