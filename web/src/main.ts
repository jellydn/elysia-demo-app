import App from "./App.svelte";
import "./app.css";

const element = document.getElementById("app");

if (!element) {
  throw new Error("Could not find element with id 'app'");
}

const app = new App({
  target: element,
});

export default app;
