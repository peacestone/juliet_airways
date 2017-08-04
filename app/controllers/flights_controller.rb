class FlightsController < ApplicationController

  def find
    requested_departure_day =  DateTime.parse(flight_params[:departure_date])
    requested_departure_city = flight_params[:departure_city]
    requested_arival_city = flight_params[:arival_city]

    @flights = Flight.where departure_city: requested_departure_city, arival_city: requested_arival_city, departure_date_time: requested_departure_day..(requested_departure_day  + 23.hours + 59.minutes + 59.seconds)
    #flights = Flight.where departure_city: 'JFK'
     render json:  @flights, meta: {departure_date: requested_departure_day, departure_city: requested_departure_city, arival_city: requested_arival_city}, meta_key: 'request'

  end

  private

  def flight_params
    params.require(:flights).permit(:departure_city, :arival_city, :departure_date)
  end
end
