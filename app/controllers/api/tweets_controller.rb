class Api::TweetsController < Api::ApplicationController
  def index
    tweets = Tweet.includes(:user).order(created_at: :desc)

    render json: tweets.as_json(
      include: {
        user: { only: [:id, :username] }
      }
    )
  end

  def create
    tweet = current_user.tweets.build(tweet_params)

    if tweet.save
      render json: tweet.as_json(
        include: {
          user: { only: [:id, :username] }
        }
      ), status: :created
    else
      render json: { errors: tweet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    tweet = current_user.tweets.find(params[:id])
    tweet.destroy
    head :no_content
  end

  private

  def tweet_params
    params.require(:tweet).permit(:content)
  end
end
