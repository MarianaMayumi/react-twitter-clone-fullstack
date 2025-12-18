module Api
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      # 🔥 limpa sessão antes de criar novo usuário
      reset_session

      user = User.new(user_params)

      if user.save
        session[:user_id] = user.id
        render json: {
          id: user.id,
          username: user.username
        }
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end
end
