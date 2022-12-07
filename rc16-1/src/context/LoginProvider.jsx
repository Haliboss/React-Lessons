import { createContext, useState } from "react";

//? 1-) Creating Login Context/
export const LoginContext = createContext();

//? 2-) Providing
const LoginProvider = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };

  return <LoginContext.Provider value={values}></LoginContext.Provider>;
};

export default LoginProvider;
