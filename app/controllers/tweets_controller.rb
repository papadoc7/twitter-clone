class TweetsController < ApplicationController
  
  def index
    render json: Tweet.includes(:user)order(created_at: :desc).all #with includes(:user) we will avoid problem called n+1 where our code is doing an sql query for every object in the collection
  end

  def create
    tweet = Tweet.create(body: params[:tweet], user_id: current_user.id)
    render json: tweet
  end

end
