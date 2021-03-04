import { useState } from "react";
import flavors from "./flavors.json";
import Nav from "./components/Nav";
import Map from "./components/Map";
import Filter from "./components/Filter";
import Find from "./components/Find";
import Some from "./components/Some";
import Reduce from "./components/Reduce";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("map");

  let content;

  switch (current) {
    case "map":
      content = <Map flavors={flavors} />;
      break;
    case "filter":
      content = <Filter flavors={flavors} />;
      break;
    case "find":
      content = <Find flavors={flavors} />;
      break;
    case "reduce":
      content = <Reduce flavors={flavors} />;
      break;
    case "some":
      content = <Some flavors={flavors} />;
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
