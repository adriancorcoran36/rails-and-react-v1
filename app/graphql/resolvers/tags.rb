module Resolvers
  class Tags < Resolvers::Base
    def resolve
      Tag.all
    end
  end
end