import React from "react";
import Signup from "./components/signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import ViewProperty from "./components/viewProperty";
import Property from "./components/property";
import Password from "./components/password";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="Signup" element={<Signup />} />
        <Route path="ViewProperty" element={<ViewProperty />} />
        <Route path="Property" element={<Property />} />
        <Route path="Password" element={<Password />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;