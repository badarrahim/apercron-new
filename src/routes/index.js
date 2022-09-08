import AuthView from "../views/auth/AuthView";
import Landing from "../views/Landing";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/",
    component: Landing,
    layout: "main",
  },
];
export default routes;
