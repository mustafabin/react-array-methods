import { useState } from "react";
import flavors from "./flavors.json";
import Map from "./components/Map";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("map");

  let content;

  switch (current) {
    case 'map':
      content = <Map flavors={flavors} />;
      break;
    default:
      content = <Map flavors={flavors} />;
  }

  return (
    <div className="App">
      <h1>Ye Olde Ice Creame Shoppe</h1>
      <Nav setCurrent={setCurrent} />
      <hr />
      {content}
    </div>
  );
}

export default App;
