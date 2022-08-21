module Resolvers
  class Images < Resolvers::Base
    def resolve
      Image.all
    end
  end
end