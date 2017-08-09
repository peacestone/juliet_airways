class FlightSerializer < ActiveModel::Serializer
  attributes :departure_time, :arival_time, :price, :flight_number

  def departure_time
    Flight.format_time(object.departure_time)
  end

  def arival_time
    Flight.format_time(object.arival_time)
  end


end
