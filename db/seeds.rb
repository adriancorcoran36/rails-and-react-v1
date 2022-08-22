# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ title: 'Star Wars' }, { title: 'Lord of the Rings' }])
#   Character.create(title: 'Luke', movie: movies.first)

Image.create!(
  group_id: "75863",
  creative_number: 1401474061,
  handle: "entrepreneur-interviewed-on-a-podcast-royalty-free-image",
  title: "Entrepreneur interviewed on a podcast - stock photo",
  subtitle: "Candid portrait of African-American entrepreneur interviewed on a radio podcast.",
  extra_small_price: 5000,
  extra_small_details: "509 x 339 px (17.96 x 11.96 cm) 72 dpi|0.2 MP",
  small_price: 15000,
  small_details: "726 x 484 px (25.61 x 17.07 cm) 72 dpi|0.4 MP",
  medium_price: 33500,
  medium_details: "2123 x 1416 px (17.97 x 11.99 cm) 300 dpi|3.0 MP",
  large_price: 47500,
  large_details: "8112 x 5411 px (68.68 x 45.81 cm) 300 dpi|43.9 MP",
  credit: "visualspace",
  licence_type: "Royalty-free",
  collection: "E+",
  release_info: "Model and property released"
)

Image.create!(
  group_id: "75863",
  creative_number: 1401474060,
  handle: "happy-young-woman-talking-in-a-podcast-royalty-free-image",
  title: "Happy young woman talking in a podcast - stock photo",
  subtitle: "Candid portrait of young entrepreneur, interviewed for a podcast.",
  extra_small_price: 5000,
  extra_small_details: "509 x 339 px (17.96 x 11.96 cm) 72 dpi|0.2 MP",
  small_price: 15000,
  small_details: "726 x 484 px (25.61 x 17.07 cm) 72 dpi|0.4 MP",
  medium_price: 33500,
  medium_details: "2123 x 1416 px (17.97 x 11.99 cm) 300 dpi|3.0 MP",
  large_price: 47500,
  large_details: "8192 x 5464 px (69.36 x 46.26 cm) 300 dpi|44.8 MP",
  credit: "visualspace",
  licence_type: "Royalty-free",
  collection: "E+",
  release_info: "Model and property released"
)

Image.create!(
  group_id: "75863",
  creative_number: 1401474042,
  handle: "radio-host-podcasting-at-work-royalty-free-image",
  title: "Radio host podcasting at work - stock photo",
  subtitle: "Candid portrait of Radio host podcasting in his studio.",
  extra_small_price: 5000,
  extra_small_details: "509 x 339 px (17.96 x 11.96 cm) 72 dpi|0.2 MP",
  small_price: 15000,
  small_details: "726 x 484 px (25.61 x 17.07 cm) 72 dpi|0.4 MP",
  medium_price: 33500,
  medium_details: "2123 x 1416 px (17.97 x 11.99 cm) 300 dpi|3.0 MP",
  large_price: 47500,
  large_details: "8192 x 5464 px (69.36 x 46.26 cm) 300 dpi|44.8 MP",
  credit: "visualspace",
  licence_type: "Royalty-free",
  collection: "E+",
  release_info: "Model and property released"
)

Tag.create!([
  { image_id: 1, title: "Podcasting" },
  { image_id: 1, title: "Adult" },
  { image_id: 1, title: "African Ethnicity" },
  { image_id: 1, title: "Audio Equipment" },
  { image_id: 2, title: "Business Casual" },
  { image_id: 2, title: "Candid" },
  { image_id: 3, title: "Colour Image" },
  ])
