import React, { useState } from "react";
import { createTweet } from "../../api/tweets";

export default function NewTweetForm({ onCreated }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    await createTweet(content);
    setContent("");
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">Tweet</button>
    </form>
  );
}
