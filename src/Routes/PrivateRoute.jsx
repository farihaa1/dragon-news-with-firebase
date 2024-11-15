import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log('private', location)

  if(loading){
    return <Loading></Loading>
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to = {'/auth/login'}></Navigate>;
};

export default PrivateRoute;
