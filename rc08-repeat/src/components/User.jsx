import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    //? ComponentDidMount
    getUser();
  }, []);

  console.log(user);
  const {name, email, dob, picture} = user;

  return (
    <div>
      {/* optional chainig */}
      <h1>{name?.first} {name?.last}</h1>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>{email}</p>
      <h5>{new Date(dob?.date).toLocaleDateString('tr-TR')}</h5>
      <button className="btn btn-danger" onClick={getUser}>Get User</button>
    </div>
  );
};

export default User;
