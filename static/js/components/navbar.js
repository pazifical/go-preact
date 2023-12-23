import { h, Component } from "../vendor/preact.mjs";
import htm from "../vendor/htm.mjs";

const html = htm.bind(h);

export default class NavBar extends Component {
  render() {
    return html`<nav>
      <a href="/">Home</a>
      <a href="/components.html">Components</a>
    </nav>`;
  }
}
