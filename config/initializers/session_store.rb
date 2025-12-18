Rails.application.config.session_store :cookie_store,
  key: :_twitter_clone_session,
  same_site: :lax,
  secure: false
