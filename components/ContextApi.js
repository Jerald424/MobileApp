import React, { useLayoutEffect, createContext } from "react";
import { View } from "react-native";
import { useNavigate } from "react-router-dom";

export const main = createContext({
  isUserLogIn: () => {},
  isUserLogOut: () => {},
});
const ContextApi = ({ children }) => {
  const [userLogInStatus, setUserLogInStatus] = React.useState(false);
  const userData = { name: "jerald", password: "1234" };
  // =====userLog-in=======
  const navigate = useNavigate();
  const userLogIn = (name, password) => {
    console.log(name, password, "the sended data is");
    setUserLogInStatus(true);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  // ==========
  const logOut = () => {
    localStorage.removeItem("user");
    setUserLogInStatus(false);
    navigate("/");
  };

  // =============
  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserLogInStatus(true);
    }
  }, []);
  const values = {
    isUserLogIn: userLogIn,
    userLogInStatus,
    isUserLogOut: logOut,
  };
  return (
    <View>
      <main.Provider value={values}>{children}</main.Provider>
    </View>
  );
};

export default ContextApi;
