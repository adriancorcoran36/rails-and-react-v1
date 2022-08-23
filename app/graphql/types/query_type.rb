module Types
  class QueryType < Types::BaseObject
    field :single_image, resolver: Resolvers::SingleImage, description: "Information on a single image"
    field :images, resolver: Resolvers::Images, description: "All images in the database"
    field :other_images, resolver: Resolvers::OtherImages, description: "Other images in the same group as the image provided"
    field :tags, resolver: Resolvers::Tags, description: "All tags in the database"
  end
end