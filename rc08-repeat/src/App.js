
import UseEffectHook from "./components/UseEffectHook";
import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";
import Timer from './components/Timer'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark mb-4" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {/* Short Circuit */}
      {show && <LifeCycleMethods />}
      {/* <Timer /> */}

      {/* show && <UseEffectHook /> */}
    </div>
  );
}

export default App;
