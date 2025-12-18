import React, { useEffect, useState } from "react";
import { fetchTweets, createTweet, deleteTweet } from "../api/tweets";

export default function HomePage({ user, setUser }) {
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔴 NÃO busca tweets se não estiver logado
    if (!user) {
      setTweets([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetchTweets()
      .then((data) => {
        setTweets(data || []);
      })
      .catch((err) => {
        console.error(err);

        // sessão expirou → volta pro login
        if (err.message === "401" || err.message.includes("401")) {
          setUser(null);
        }

        setTweets([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, setUser]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const tweet = await createTweet(content);
      setTweets([tweet, ...tweets]);
      setContent("");
    } catch (err) {
      alert("Erro ao criar tweet");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTweet(id);
      setTweets(tweets.filter((t) => t.id !== id));
    } catch (err) {
      alert("Erro ao deletar tweet");
    }
  }

  async function handleLogout() {
    await fetch("/logout", {
      method: "DELETE",
      credentials: "include",
    });
    setUser(null);
  }

  if (!user) {
    return null; // evita renderizar enquanto redireciona
  }

  if (loading) {
    return <p>Carregando tweets...</p>;
  }

  return (
    <div>
      <h1>Twitter Clone</h1>

      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Tweet</button>
      </form>

      <hr />

      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <strong>@{tweet.user.username}</strong>
          <p>{tweet.content}</p>

          {tweet.user.id === user.id && (
            <button onClick={() => handleDelete(tweet.id)}>Delete</button>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}
