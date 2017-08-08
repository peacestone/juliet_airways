class FlightSerializer < ActiveModel::Serializer
  attributes :departure_time, :arival_time, :price, :flight_number

  
end
