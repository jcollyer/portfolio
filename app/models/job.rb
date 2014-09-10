class Job < ActiveRecord::Base
  # has_many :pictures, as: :imageable


  has_attached_file :image,
    :styles => { :xlarg => "600x400>", :large => "260x390>", :medium => "130x195>", :thumb => "65x100>" },
    :storage => :s3,
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET'],
      :bucket => "portfolio_data"
    },
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename",
    :default_url => '/assets/missing_:style.jpg'
  # validates_attachment_content_type :image, :content_type => %w(image/jpeg image/jpg)
  validates_attachment_content_type :image, :content_type => /\Aimage/


  has_attached_file :icon,
    :styles => { :medium => "130x195>", :thumb => "65x100>" },
    :storage => :s3,
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET'],
      :bucket => "portfolio_data"
    },
    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
    :url => "/system/:attachment/:id/:style/:filename",
    :default_url => '/assets/missing_:style.jpg'
  # validates_attachment_content_type :image, :content_type => %w(image/jpeg image/jpg)
  validates_attachment_content_type :image, :content_type => /\Aimage/
end
