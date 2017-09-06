puts "Seeding..."

 flight_info = [{ departure_date_time: DateTime.iso8601('2017-09-06T08:10'), arival_date_time: DateTime.iso8601('2017-09-06T10:29')}]

  start_date = flight_info[0][:departure_date_time]
  last_date = start_date + 90.day
  count = 0

   while start_date < last_date do

    flight_info.each do |flight|
      departure_date_time = flight[:departure_date_time] + count.days
   if !departure_date_time.saturday? && !departure_date_time.sunday?
        Flight.create(departure_city: "ATL", arival_city: "JFK", departure_datetime: departure_date_time , arival_datetime: flight[:arival_date_time] + count.days, price: 200 + rand(1..250) )
     end
   end

   count += 1

 end





puts "Done"
