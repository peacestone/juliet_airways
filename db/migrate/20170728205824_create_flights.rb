class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :departure_city
      t.string :arival_city
      t.datetime :departure_date_time
      t.datetime :arival_date_time
      t.integer :price
      t.timestamps
    end
  end
end
