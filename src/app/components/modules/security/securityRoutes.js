import Users from "./users/Users";
import Documents from "./Documents";

const securityRoutes = [
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/documents",
    component: Documents,
  },
];

export default securityRoutes;
