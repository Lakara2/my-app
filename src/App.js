import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/Auth/AuthContext";
import "react-bootstrap";
import Home from "./pages/Dashboard/Home";
import Login from "./pages/Auth/LoginForm";
import SignupPage from "./pages/Auth/SignupPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import ProfilePage from "./pages/Dashboard/ProfilePage";
import UserListPage from "./components/User/UserList";
import UserDetailPage from "./components/User/UserDetailPage";
import UserFormPage from "./components/User/UserFormPage";
import EquipementListPage from "./components/Equipement/EquipementListPage";
import EquipementFormPage from "./components/Equipement/EquipementFormPage";
import EquipementDetailPage from "./components/Equipement/EquipementDetailPage";
import NotFound from "./pages/ProfilePage/help/NotFound";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((r) => console.log(r))
      .catch((e) => console.error(e));

    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    return () => {
      localStorage.removeItem("token");
    };
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    window.location.href = "/";
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthProvider value={{ isAuthenticated, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<NotFound />} />
          <Route exact path="/users" element={<UserListPage />} />
          <Route exact path="/users/:id" element={<UserDetailPage />} />
          <Route exact path="/users-form" element={<UserFormPage />} />
          <Route exact path="/equipements" element={<EquipementListPage />} />
          <Route
            exact
            path="/equipements-form"
            element={<EquipementFormPage />}
          />
          <Route
            exact
            path="/equipements/:id"
            element={<EquipementDetailPage />}
          />
        </Routes>
      </Router>
    </AuthProvider>
    // <h2>Tesst</h2>
  );
};

export default App;
