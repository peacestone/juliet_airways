class FlightSerializer < ActiveModel::Serializer
  attributes :departure_time, :arival_time, :price, :flight_number, :total_fly_time, :departure_date

  def departure_time
    Flight.format_time(object.departure_datetime)
  end

  def departure_date
    Flight.format_date(object.departure_datetime)
  end

  def arival_time
    Flight.format_time(object.arival_datetime)
  end

  def total_fly_time
    Time.at(object.arival_datetime - object.departure_datetime).utc.strftime "%Hh %Mm"
  end




end
