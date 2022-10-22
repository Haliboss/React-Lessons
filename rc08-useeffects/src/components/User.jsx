import { useState } from "react";

const User = () => {

    const [user, setUser] = useState("");

    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => setUser(data));

    //Engellemek için bir array oluşturup içine user'ı atıyoruz.


    return (
      <div>
        <h1>{name.first}</h1>
        <img src="" alt="" />
        <p>email</p>
        <h5>DOB</h5>
        <button className="btn btn-danger">Get User</button>
      </div>
    );
  };
  
  export default User;