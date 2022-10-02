import Landing from "../views/Landing";

import Locker from "../views/Locker";
import Launchpads from "../views/Launchpads";
import CreateToken from "../views/CreateToken";

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
];
export default routes;
