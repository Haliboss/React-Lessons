import { useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => setUser(data));

    //console.log(user)

  return (
    <div>
      <h1>NAME</h1>
      <img src="" alt="" />
      <p>email</p>
      <h5>DOB</h5>
      <button className="btn btn-danger">Get User</button>
    </div>
  );
};

export default User;
