class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name, limit: 100, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.boolean :timed, default: true
      t.text :description
      t.string :color

      t.timestamps
    end
  end
end
