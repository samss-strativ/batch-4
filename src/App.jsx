import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyIdols from "./components/MyIdols";
import KeanuReeves from "./components/KeanuReeves";
import LeoMessi from "./components/LeoMessi";
import Navbar from "./components/Navbar";
import AllProducts from "./components/Products/AllProducts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar/>
        <AllProducts/>
      </div>
    </>
  );
}

export default App;
