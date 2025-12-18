class RemoveMessageFromTweets < ActiveRecord::Migration[7.2]
  def change
    remove_column :tweets, :message, :string
  end
end
