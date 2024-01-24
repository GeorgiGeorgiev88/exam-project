import UserContext from "../../../contexts/uresContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard(props) {

  const { authenticated } = useContext(UserContext);
  

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
  
}
