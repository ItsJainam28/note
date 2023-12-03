import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authstate = (props) => {

    const [jwtToken, setJwt] = useState(localStorage.getItem("jwt"));
    

  return (
    <AuthContext.Provider value={{ jwtToken, setJwt }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default Authstate;
