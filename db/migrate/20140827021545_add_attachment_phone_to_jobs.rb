class AddAttachmentPhoneToJobs < ActiveRecord::Migration
  def self.up
    add_attachment :jobs, :phone
  end

  def self.down
    remove_attachment :jobs, :phone
  end
end
