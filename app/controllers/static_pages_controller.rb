class StaticPagesController < ApplicationController
  def index
    render template: "static_pages/home"
  end
end
