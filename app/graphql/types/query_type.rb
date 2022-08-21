module Types
  class QueryType < Types::BaseObject
    field :images, [Types::ImageType], resolver: Resolvers::Images, null: false
  end
end