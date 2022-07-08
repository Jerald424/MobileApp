import React from "react";
import { View } from "react-native";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextApi from "./components/ContextApi";
import Home from "./components/Home/Home";
import UserLogInForm from "./components/UserLogIn/UserLogInForm";
import UserProfile from "./components/UserProfile/UserProfile";

export default function App() {
  return (
    <View>
      <BrowserRouter>
        <ContextApi>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/userlogin' element={<UserLogInForm />} />
            <Route path='/userprofile' element={<UserProfile />} />
          </Routes>
        </ContextApi>
      </BrowserRouter>
    </View>
  );
}
