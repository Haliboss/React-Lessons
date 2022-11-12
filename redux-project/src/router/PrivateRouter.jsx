import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;  // Todo : useSelector

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
