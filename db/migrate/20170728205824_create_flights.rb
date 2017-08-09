class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :departure_city
      t.string :arival_city
      t.integer :departure_time
      t.integer :arival_time
      t.string :total_fly_time
      t.integer :price
      t.timestamps
    end
  end
end
