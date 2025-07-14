// import stye from "./App.module.css";
import { Icons } from "./components/components";
import logo from "./logo.png";
function App() {
  return (
    <div>
      <Icons type="x80" texttype="left">
        <img src={logo} alt="" />
        <p>text</p>
      </Icons>
    </div>
  );
}

export default App;
