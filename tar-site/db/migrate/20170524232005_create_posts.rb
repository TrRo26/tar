class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
    	t.string :title
    	t.string :sub_title
      t.string :img_path
     	t.string :author
    	t.text :tags, array: true, default: []
    	t.text :body

      t.timestamps
    end
  end
end
