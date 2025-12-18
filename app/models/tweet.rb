class Tweet < ApplicationRecord
  belongs_to :user

  # Ajuste: agora usamos :content e não mais :message
  validates :content, presence: true, length: { maximum: 280 }
end
