/* import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //obje haline getirme
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Submitted");
    alert(`username: ${username}
          email:${email},
          password:${password}
    `);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
 */

import React, { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password:''
  });
  
  const {username, email, password} = formValues;
  
  const handleForm = (e)=> {
    console.log(e.target.value);
    console.log(e.target.id);
    setFormValues({...formValues, [e.target.id]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("submiited");
    alert(`username: ${username}
    email:${email}
    passwrd:${password} `);
    
    setFormValues({
      username:'',
      email:'',
      password:''
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-4 text-danger">FORM OBJECT</h1>
      <div className="mb-3">
        <label htmlFor="usename" className="form-label">
          Username: <span className="text-danger">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
