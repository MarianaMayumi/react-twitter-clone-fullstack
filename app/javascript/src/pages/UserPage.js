import React from "react";
import { fetchTweetsByUser } from "../api/tweets";
import TweetCard from "../components/tweets/TweetCard.jsx";

export default class UserPage extends React.Component {
  state = {
    tweets: [],
    loading: true,
    username: null,
  };

  componentDidMount() {
    const username = window.location.pathname.replace("/", "");
    this.setState({ username }, this.load);
  }

  load = async () => {
    try {
      const tweets = await fetchTweetsByUser(this.state.username);
      this.setState({ tweets, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  };

  render() {
    const { tweets, loading, username } = this.state;

    return (
      <div className="home-page">
        <h2>User tweets: @{username}</h2>

        {loading ? (
          <div>Loading...</div>
        ) : (
          tweets.map((tweet) => (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              onDeleted={this.load}
            />
          ))
        )}
      </div>
    );
  }
}
