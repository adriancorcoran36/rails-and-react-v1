module Types
  class QueryType < Types::BaseObject
    field :images, [Types::ImageType], resolver: Resolvers::Images, null: false

    field :tags, [Types::TagType], resolver: Resolvers::Tags, null: false
  end
end