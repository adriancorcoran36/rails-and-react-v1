# frozen_string_literal: true

module Types
  class ImageType < Types::BaseObject
    field :id, ID, null: false
    field :group_id, Int, null: false
    field :creative_number, Int, null: false
    field :handle, String, null: false
    field :title, String, null: false
    field :subtitle, String
    field :extra_small_price, Int, null: false
    field :extra_small_details, String, null: false
    field :small_price, Int, null: false
    field :small_details, String, null: false
    field :medium_price, Int, null: false
    field :medium_details, String, null: false
    field :large_price, Int, null: false
    field :large_details, String, null: false
    field :credit, String
    field :licence_type, String
    field :collection, String
    field :release_info, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
