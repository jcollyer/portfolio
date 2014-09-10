class AddAttachmentIconToJobs < ActiveRecord::Migration
  def self.up
    add_attachment :jobs, :icon
  end

  def self.down
    remove_attachment :jobs, :icon
  end
end
