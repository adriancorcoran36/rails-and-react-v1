class Image < ApplicationRecord
  validates :title, :downloads, presence: true
end
