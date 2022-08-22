# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_22_221626) do

  create_table "images", force: :cascade do |t|
    t.integer "group_id", null: false
    t.integer "creative_number", null: false
    t.string "handle", null: false
    t.string "title", null: false
    t.string "subtitle"
    t.integer "extra_small_price", null: false
    t.string "extra_small_details", null: false
    t.integer "small_price", null: false
    t.string "small_details", null: false
    t.integer "medium_price", null: false
    t.string "medium_details", null: false
    t.integer "large_price", null: false
    t.string "large_details", null: false
    t.string "credit"
    t.string "licence_type"
    t.string "collection"
    t.string "release_info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags", force: :cascade do |t|
    t.belongs_to :image, index: true
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
