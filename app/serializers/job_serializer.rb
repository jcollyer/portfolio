class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :show, :position, :url
end
