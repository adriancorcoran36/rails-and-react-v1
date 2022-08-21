module Types
  class QueryType < Types::BaseObject
    field :images, [Types::ImageType], null: false
    def images
      Image.all
    end
  end
end