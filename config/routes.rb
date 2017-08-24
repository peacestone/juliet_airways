Rails.application.routes.draw do

  post 'api/find-flights', to: 'flights#find'

  post 'api/reservations', to: 'reservations#create'

  post 'api/reservations/find', to: 'reservations#find'

end
