// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let message = "Event is not triggered yet.";

  const handClick = () => {
    alert("Tiklandi");
  };

  const handClear = (msg) => {
    alert(msg);
  };

  const handChange = (event) => {
    console.log(event.target);

    message = "REACT";
    console.log(message);  
};

  return (
    <div className="container text-center mt-4">
        <h1>{message}</h1>
      <button onClick={handClick} className="btn btn-success">
        Click
      </button>

      <button
        onClick={() => handClear("Clear Btn Clicked")}
        className="btn btn-dark"
      >
        Clear
      </button>

      <button onClick={handChange} className="btn btn-danger">
        Change
      </button>

      <button onClick={(e) => handChange(e)} className="btn btn-warning">
        Change
      </button>
    </div>
  );
};

export default Events;
