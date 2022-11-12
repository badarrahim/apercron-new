import Landing from "../views/Landing";

import Locker from "../views/Locker";
import Launchpads from "../views/Launchpads";
import CreateToken from "../views/CreateToken";
import Admin from "../views/Admin";

let routes = [
  {
    path: "/",
    component: Landing,
    layout: "main",
  },
  {
    path: "/locker",
    component: Locker,
    layout: "main",
  },
  {
    path: "/launchpads",
    component: Launchpads,
    layout: "main",
  },
  {
    path: "/createtoken",
    component: CreateToken,
    layout: "main",
  },
  {
    path: "/admin",
    component: Admin,
    layout: "main",
  },
];
export default routes;
