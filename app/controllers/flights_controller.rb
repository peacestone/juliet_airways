class FlightsController < ApplicationController

  def find
    @flight = Flight.find_by departure_city: flight_params[:departure_city], arival_city: flight_params[:arival_city]
    render json: @flight
  end

  private

  def flight_params
    params.require(:flights).permit(:departure_city, :arival_city, :departDate)
  end
end
