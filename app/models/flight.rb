class Flight < ApplicationRecord

  self.primary_key = 'flight_number'

  has_many :reservations, foreign_key: 'flight_number'


  def self.format_time(time)
    time.strftime("%I:%M %p")
  end

  def self.format_date(date)
    date.strftime("%A, %B %d, %Y")
  end





end
