class AddCalendarIdToEvents < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :calendar, null: false, foreign_key: true
  end
end
