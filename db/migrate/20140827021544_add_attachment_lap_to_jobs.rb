class AddAttachmentLapToJobs < ActiveRecord::Migration
  def self.up
    add_attachment :jobs, :lap
  end

  def self.down
    remove_attachment :jobs, :lap
  end
end
