//import UseEffectHook from "./components/UseEffectHook";
//import LifeCycleMethods from "./components/LifeCycleMethods";

import Timer from './components/Timer'
import { useState } from "react";
//import User from "./components/User";
//import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark mb-4" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {/* Short Circuit */}
      {/* {show && <LifeCycleMethods />} */}
      {show && <Timer time={10}/>}
      {/* {show && <UseEffectHook />} */}
      {/* <User/> */}
    </div>
  );
}

export default App;
