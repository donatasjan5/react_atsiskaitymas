import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export default App;
