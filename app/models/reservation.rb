class Reservation < ApplicationRecord
  belongs_to :flight, foreign_key: 'flight_number'
end
