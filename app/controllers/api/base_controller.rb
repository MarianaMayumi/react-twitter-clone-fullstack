# app/controllers/api/base_controller.rb
class Api::BaseController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :require_login

  private

  def require_login
    unless current_user
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
