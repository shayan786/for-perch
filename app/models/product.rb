class Product < ApplicationRecord
  validates_presence_of :title
  validates_presence_of :price
  validates_presence_of :image
end
