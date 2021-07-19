import {h, render} from 'preact';
import {TallyApp} from "./components/app";

const App = <TallyApp name="Test"/>;

let el = document.querySelector("#app");
el.innerHTML = "";
render(App, document.querySelector("#app"));
