class Tag < ApplicationRecord
  validates :title, :image_id, presence: true
  belongs_to :image
end
