class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
    	t.string :title, null: false
    	t.string :sub_title
     	t.string :author
    	t.text :tags, array: true, default: []
    	t.string :body, null: false

      t.timestamps
    end
  end
end
