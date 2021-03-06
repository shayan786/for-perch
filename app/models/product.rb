class Product < ApplicationRecord
  validates_presence_of :title
  validates_presence_of :price
  validates_presence_of :image

  belongs_to :order, optional: true
end
