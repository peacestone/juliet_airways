class FlightSerializer < ActiveModel::Serializer
  attributes :departure_time, :arival_time, :price, :total_fly_time

  def departure_time
    Flight.format_time(object.departure_date_time)
  end

  def arival_time
    Flight.format_time(object.arival_date_time)
  end

  def total_fly_time
    Time.at(object.arival_date_time - object.departure_date_time).utc.strftime "%H:%M"
  end

end
