class Flight < ApplicationRecord

  def self.format_time(time)
    time.strftime("%I:%M %p")
  end

end
