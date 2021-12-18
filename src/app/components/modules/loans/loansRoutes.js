import Balance from "./Balance";
import Loans from "./Loans";
import Record from "./Record";
const loansRoutes = [
  {
    path: "/loans",
    component: Loans,
  },
  {
    path: "/balance",
    component: Balance,
  },
  {
    path: "/record",
    component: Record,
  },
];
export default loansRoutes;