class Image < ApplicationRecord
  validates :creative_number, :handle, :title, :subtitle, presence: true
  validates :extra_small_price, :extra_small_details, :small_price, :small_details, :medium_price, :medium_details, :large_price, :large_details, presence: true
  has_many :tags
  has_many :related_image_association, :class_name => "RelatedImage"
  has_many :related_images, :through => :related_image_association, :source => :related_image
  has_many :inverse_related_images_association, :class_name => "RelatedImage", :foreign_key => "related_image_id"
  has_many :inverse_related_images, :through => :inverse_related_images_association, :source => :image
end
