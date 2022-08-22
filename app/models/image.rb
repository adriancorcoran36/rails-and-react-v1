class Image < ApplicationRecord
  validates :group_id, :creative_number, :handle, :title, :subtitle, presence: true
  validates :extra_small_price, :extra_small_details, :small_price, :small_details, :medium_price, :medium_details, :large_price, :large_details, presence: true
  has_many :tags
end
