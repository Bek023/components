
// import stye from './App.module.css'
import { Inputs } from './components/components';

function App() {

  const props = {
    type: "text",
    label: "something:",
    placeholder: "typing...",
    maxLength: 10,
    autoFocus: true,

  }
  return (
    <Inputs {...props} />
  )
}

export default App;