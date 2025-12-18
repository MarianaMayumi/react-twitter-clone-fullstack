Rails.application.routes.draw do
  root "home#index"

  post   "/login",  to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get    "/me",     to: "sessions#me"

  post "/signup", to: "users#create"

  namespace :api do
    resources :tweets, only: [:index, :create, :destroy]
  end

  # React SPA
  get "*path", to: "home#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

