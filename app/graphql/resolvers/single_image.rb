module Resolvers
  class SingleImage < Resolvers::Base
    type Types::ImageType, null: false

    argument :id, ID, required: true
    
    def resolve(id:)
      Image.find(id)
    end
  end
end