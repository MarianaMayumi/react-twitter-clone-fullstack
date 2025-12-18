export async function createTweet(content) {
  const res = await fetch("/api/tweets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 🔥 ESSENCIAL
    body: JSON.stringify({ tweet: { content } }),
  });

  if (!res.ok) throw new Error("Erro ao criar tweet");
  return res.json();
}
