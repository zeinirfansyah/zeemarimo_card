import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import sceneryVideo from "./assets/videos/grass_scenery.mp4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <video autoplay="autoplay" muted loop id="myVideo">
        <source src={sceneryVideo} type="video/mp4" />
      </video>

      <Home />
    </div>
  );
}

export default App;
