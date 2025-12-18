class Api::AuthenticatedController < ApplicationController
  def index
    if session[:user_id]
      render json: { authenticated: true, user_id: session[:user_id] }
    else
      render json: { authenticated: false }, status: :unauthorized
    end
  end
end
