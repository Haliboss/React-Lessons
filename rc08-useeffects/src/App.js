import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
import LifeCycleMethods from './components/LifeCycleMethods'

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center mt-4">
      <LifeCycleMethods/>
    </div>
  );
}

export default App;
