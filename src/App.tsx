// import stye from "./App.module.css";
import { Icons } from "./components/components";
import logo from "./logo.png";
function App() {
  const props = {
    type: "x80",
  };
  return (
    <div>
      <Icons {...props}>
        <img src={logo} alt="" />
      </Icons>
    </div>
  );
}

export default App;
