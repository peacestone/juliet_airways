class ReservationsController < ApplicationController

  def create
    reservation = Reservation.new(reservations_params.except(:day, :month, :year, :confirm_email))
    reservation.dob = "#{reservations_params[:year]}-#{reservations_params[:month]}-#{reservations_params[:day]}"
    reservation.save

    render json: reservation, payment_info: reservation_payment_params
  end


  def find
    reservation = Reservation.find_by(confirmation_number: find_params[:confirmation_number], first_name: find_params[:first_name], last_name: find_params[:last_name] )
    render json: reservation
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

    def find_params
      find ||= params.require(:reservation).permit(:confirmation_number, :first_name, :last_name)
    end


end
