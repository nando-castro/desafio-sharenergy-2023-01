import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      let person: any = localStorage.getItem("userLogged");
      person = JSON.parse(person);
      setUser(person);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userLogged");
    window.location.reload();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
