module Resolvers
  class OtherImages < Resolvers::Base
    type [Types::ImageType], null: false

    argument :id, ID, required: true
    argument :group_id, ID, required: true

    def resolve(id:, group_id:)
      Image.where(group_id: group_id).and(Image.where.not(id: id))
    end
  end
end