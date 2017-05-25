class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
    	t.string :title, null: false
    	t.string :sub_title
    	t.string :description, null: false
    	t.string :personal_focus
    	t.string :tech
    	t.string :url

      t.timestamps
    end
  end
end
