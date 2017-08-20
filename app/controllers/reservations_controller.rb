class ReservationsController < ApplicationController

  def create
    reservation = Reservation.new(reservations_params.except(:day, :month, :year, :confirm_email))
    reservation.dob = "#{reservations_params[:year]}-#{reservations_params[:month]}-#{reservations_params[:day]}"
    binding.pry
    reservation.save

    render json: reservation
  end

  private
    def reservations_params
       reservation ||= params.require(:reservation).permit(:first_name, :last_name, :middle_name, :frequent_flyer_number, :gender, :day, :month, :year, :email, :confirm_email, :telephone, :flight_number, :departure_date)
    end

    def parse_params_date
      DateTime.parse("#{reservations_params[:travelers_details][:year]}-#{reservations_params[:travelers_details][:month]}-#{reservations_params[:travelers_details][:day]}")
    end


end
