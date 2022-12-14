import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const GuestLayout = () => {
  const { user } = useAuthContext();

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default GuestLayout;
