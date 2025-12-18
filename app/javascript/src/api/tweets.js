export async function fetchTweets() {
  const res = await fetch("/api/tweets", {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(String(res.status));
  }

  return res.json();
}

export async function createTweet(content) {
  const res = await fetch("/api/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      tweet: { content },
    }),
  });

  if (!res.ok) {
    throw new Error("Erro ao criar tweet");
  }

  return res.json();
}

export async function deleteTweet(id) {
  await fetch(`/api/tweets/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}
