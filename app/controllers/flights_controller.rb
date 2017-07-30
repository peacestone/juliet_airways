class FlightsController < ApplicationController

  def find
    requested_departure_day =  DateTime.parse(flight_params[:departDate])
    @flights = Flight.where departure_city: flight_params[:departure_city], arival_city: flight_params[:arival_city], departure_date_time: requested_departure_day..(requested_departure_day  + 23.hours + 59.minutes + 59.seconds)
    render json: @flights
  end

  private

  def flight_params
    params.require(:flights).permit(:departure_city, :arival_city, :departDate)
  end
end
