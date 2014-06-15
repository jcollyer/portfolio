class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.boolean :show, default: true
      t.integer :position
      t.string :url

      t.timestamps
    end
  end
end
