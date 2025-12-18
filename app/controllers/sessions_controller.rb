class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id

      render json: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def destroy
    reset_session
    head :no_content
  end

  def me
    if current_user
      render json: {
        id: current_user.id,
        username: current_user.username,
        email: current_user.email
      }
    else
      render json: {}, status: :unauthorized
    end
  end
end
