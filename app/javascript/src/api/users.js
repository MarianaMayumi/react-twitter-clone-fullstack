export async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
}
