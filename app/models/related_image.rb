class RelatedImage < ApplicationRecord
  validates :image_id, :related_image_id, presence: true
  belongs_to :image
  belongs_to :related_image, :class_name => "Image"
end
