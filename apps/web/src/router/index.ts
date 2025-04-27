import { createHashRouter } from "react-router";

import Docs from "../pages/Docs/Docs";
import Home from "../pages/Home/Home";

const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/docs",
    Component: Docs,
  },
]);

export default router;
