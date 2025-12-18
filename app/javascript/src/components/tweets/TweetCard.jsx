import React from "react"
import { deleteTweet } from "../../api/tweets"

export default function TweetCard({ tweet, onDelete }) {
  const handleDelete = async () => {
    await deleteTweet(tweet.id)
    onDelete()
  }

  return (
    <div>
      <strong>@{tweet.user.username}</strong>
      <p>{tweet.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
