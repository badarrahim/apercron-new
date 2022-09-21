import Landing from "../views/Landing";

import Locker from "../views/Locker";

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
];
export default routes;
