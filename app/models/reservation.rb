class Reservation < ApplicationRecord
  extend Format_date
  #validates :confirmation_number, uniqueness: true
  #validates_uniqueness_of :confirmation_number, :first_name, allow_nil: true



  after_create :generate_confirmation

  belongs_to :flight, foreign_key: 'flight_number'

  private

  MAXIMUM_ATTEMPTS = 3

  def generate_confirmation
    update(confirmation_number: SecureRandom.hex(3))
  rescue ActiveRecord::RecordNotUnique => e
    @confirmation_attempts = @confirmation_attempts.to_i + 1
    retry if @confirmation_attempts > MAXIMUM_ATTEMPTS
    raise e, "Retries Exhausted!"
  end
end
