module Resolvers
  class Tags < Resolvers::Base
    type [Types::TagType], null: false

    def resolve
      Tag.all
    end
  end
end