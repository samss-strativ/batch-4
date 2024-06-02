import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyIdols from "./components/MyIdols";
import KeanuReeves from "./components/KeanuReeves";
import LeoMessi from "./components/LeoMessi";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar/>
        <MyIdols></MyIdols>
        <KeanuReeves></KeanuReeves>
        <LeoMessi/>
      </div>
    </>
  );
}

export default App;
