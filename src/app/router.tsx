import { createBrowserRouter } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Chat from "../pages/Chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
]);

export default router;
