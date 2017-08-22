class Reservation < ApplicationRecord
  extend Format_date

  belongs_to :flight, foreign_key: 'flight_number'
end
