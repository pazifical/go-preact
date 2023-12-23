import { h, render } from "../vendor/preact.mjs";
import htm from "../vendor/htm.mjs";
import NavBar from "../components/navbar.js";
import PoetList from "../components/list.js";

const html = htm.bind(h);

function App() {
  return html`<${NavBar} /><${PoetList} />`;
}

render(App(), document.getElementById("app"));
