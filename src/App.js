import "./App.css";
import MainPage from "./Components/mainpage";
import Navbar from "./Components/navbar";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "./Routes/routes";

function App() {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;
}

export default App;
