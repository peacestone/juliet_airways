class ReservationsController < ApplicationController

  def create
    reservation = Reservation.new(reservations_params.except(:day, :month, :year, :confirm_email))
    reservation.dob = "#{reservations_params[:year]}-#{reservations_params[:month]}-#{reservations_params[:day]}"
    reservation.save

    render json: reservation, payment_info: reservation_payment_params
  end

  private
    def reservations_params
       reservation ||= params.require(:reservation).permit(:first_name, :last_name, :middle_name, :frequent_flyer_number, :gender, :day, :month, :year, :email, :confirm_email, :telephone, :flight_number, :departure_date)
    end

    def reservation_payment_params
      payment_info ||= params.require(:reservation).require(:payment_info).permit(:card_number)
    end

    def parse_params_date
      DateTime.parse("#{reservations_params[:travelers_details][:year]}-#{reservations_params[:travelers_details][:month]}-#{reservations_params[:travelers_details][:day]}")
    end


end
