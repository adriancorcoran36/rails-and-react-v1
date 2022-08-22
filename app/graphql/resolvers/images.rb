module Resolvers
  class Images < Resolvers::Base
    type [Types::ImageType], null: false

    def resolve
      Image.all
    end
  end
end