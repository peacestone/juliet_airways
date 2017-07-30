Rails.application.routes.draw do

  post 'api/find-flights', to: 'flights#find'

end
