import Levis from "../Components/Levi's/levi's";
import Navbar from "../Components/navbar";
import Polo from "../Components/polo/polo";

const routes = [
  { path: "/", element: <Navbar /> },
  { path: "Levi's", element: <Levis /> },
  { path: "polo", element: <Polo /> },
];
export default routes;
