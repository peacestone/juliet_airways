class FlightsController < ApplicationController

  def find

    requested_departure_city = flight_params[:departure_city]
    requested_arival_city = flight_params[:arival_city]
    sort_by = flight_params[:sort_by].nil? ? 'departure_datetime' : flight_params[:sort_by]

    #unless requested_departure_day < DateTime.current || requested_departure_day > DateTime.current + 90.days
      #flights = Flight.where departure_city: requested_departure_city, arival_city: requested_arival_city
      flights = Flight.order(sort_by => :asc).where departure_city: requested_departure_city, arival_city: requested_arival_city, departure_datetime: entire_day_of(flight_params[:departure_date])

       render json: flights
    # else
      # render json: {error: "Invalid requested date"}
     #end

  end


  def status
    flight = Flight.find(status_params[:flight_number])
    render json: flight, flight_status: 'ON TIME', serializer: FlightStatusSerializer, meta: {
      flight_date: Flight.format_date(DateTime.iso8601(status_params[:flight_date]))
    }
  end

  private

  def flight_params
    params.require(:flights).permit(:departure_city, :sort_by, :arival_city, :departure_date)
  end

  def status_params
    params.require(:flights).permit(:flight_date, :flight_number)
  end

  def entire_day_of(datetime_iso_string)
    request_iso_date = DateTime.iso8601(datetime_iso_string)
    request_iso_date.beginning_of_day..request_iso_date.end_of_day
  end

end
