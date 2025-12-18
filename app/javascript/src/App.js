import React, { useEffect, useState } from "react";
import Router from "./router";
import { me } from "./api/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    me()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return <Router user={user} setUser={setUser} />;
}
