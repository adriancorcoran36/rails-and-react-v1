module Types
  class QueryType < Types::BaseObject
    field :single_image, resolver: Resolvers::SingleImage, description: "Information on a single image"
    field :images, resolver: Resolvers::Images, description: "All images in the database"
    field :tags, resolver: Resolvers::Tags, description: "All tags in the database"
  end
end