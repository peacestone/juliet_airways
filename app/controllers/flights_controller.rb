class FlightsController < ApplicationController

  def find
    requested_departure_day =  DateTime.parse(flight_params[:departure_date])
    requested_departure_city = flight_params[:departure_city]
    requested_arival_city = flight_params[:arival_city]
    unless requested_departure_day < DateTime.current || requested_departure_day > DateTime.current + 90.days
      flights = Flight.where departure_city: requested_departure_city, arival_city: requested_arival_city

       render json:  flights, meta: {departure_date: Flight.format_date(requested_departure_day), departure_city: requested_departure_city, arival_city: requested_arival_city}, meta_key: 'request'
     else
       render json: {error: "Invalid requested date"}
     end

  end

  private

  def flight_params
    params.require(:flights).permit(:departure_city, :arival_city, :departure_date)
  end
end
