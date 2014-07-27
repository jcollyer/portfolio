class Job < ActiveRecord::Base
  has_many :pictures, as: :imageable
end
