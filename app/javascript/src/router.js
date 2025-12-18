import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function Router({ user, setUser }) {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            user ? (
              <HomePage user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            user ? <Navigate to="/" replace /> : <LoginPage setUser={setUser} />
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={
            user ? <Navigate to="/" replace /> : <SignupPage setUser={setUser} />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
