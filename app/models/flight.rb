class Flight < ApplicationRecord

  extend Format_date

  self.primary_key = 'flight_number'

  has_many :reservations, foreign_key: 'flight_number'


  def self.format_time(time)
    time.strftime("%I:%M %p")
  end







end
