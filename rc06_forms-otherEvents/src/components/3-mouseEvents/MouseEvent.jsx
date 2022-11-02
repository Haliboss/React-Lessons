import { useState } from "react";

const MouseEvent = () => {
  const [showHint, setShowHint] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [coordX, setcoordX] = useState();
  const [coordY, setcoordY] = useState();
  

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    toggle
      ? (e.target.className = "bg-success text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-danger text-light w-50 p-4 mt-4");
  };
  console.log(toggle);

  const handleMouseMove = (e) => {
    setcoordX(e.nativeEvent.offsetX); //? div icersindeki konumuna gore koordinat
    setcoordY(e.nativeEvent.offsetY);
    //setcoordX(e.pageX); //? sayfa ustundeki konuma gore koordinat verir
    //setcoordY(e.pageY);    
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
        id="todo-1"
        className="bg-success text-light w-50 p-4"
      >
        todo item 1 {showHint && <span>Hello React</span>}
      </div>

      <div
        onDoubleClick={handleDoubleClick}
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
      >
        todo item 2
      </div>

      <div  onMouseMove={handleMouseMove} id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX}  {coordY}</p>
    </div>
  );
};

export default MouseEvent;
