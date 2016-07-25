# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Product.create([
  {
    title: 'Boots',
    price: 50.00,
    image: "http://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_60793.jpg"
  },
  {
    title: 'T-Shirt',
    price: 20.00,
    image: "http://ardentmusic.11spot.com/media/catalog/product/cache/47/image/9df78eab33525d08d6e5fb8d27136e95/r/a/radio_city_tee_.jpg"
  },
  {
    title: 'Fancy Shorts',
    price: 100.01,
    image: "http://shared1.ad-lister.co.uk/UserImages/1e68d38c-b3ac-4d50-b363-7c6137579b87/Img/HotPants/NEON-TUTU-SHORTS---80s-FANCY-DRESS-HEN-PARTY-v15.jpg"
  }
])
