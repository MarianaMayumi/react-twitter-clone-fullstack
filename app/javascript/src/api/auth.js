export async function login(email, password) {
  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function signup(username, email, password) {
  const res = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      user: { username, email, password },
    }),
  });

  if (!res.ok) throw new Error("Signup failed");
  return res.json();
}

export async function me() {
  const res = await fetch("/me", {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function logout() {
  await fetch("/logout", {
    method: "DELETE",
    credentials: "include",
  });
}
