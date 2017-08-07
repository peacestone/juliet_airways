puts "Seeding..."

Flight.create(flight_number: '510', departure_city: "JFK", arival_city: "LAX", departure_date_time: '2018-03-22 11:18:00', arival_date_time: '2018-03-22 14:19:00', price: 350 )


Flight.create(flight_number: '432', departure_city: "LAX", arival_city: "JFK", departure_date_time: '2018-03-22 17:30:00', arival_date_time: '2018-03-22 21:11:00', price: 400 )

Flight.create(flight_number: '111', departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 08:30:00', arival_date_time: '2018-03-22 10:50:00', price: 200 )

Flight.create(flight_number: '75', departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 05:10:00', arival_date_time: '2018-03-22 07:50:00', price: 200 )


  date = DateTime.current
  last_date = date + 90.day
  while date < last_date do

  flight_info = [{flt_num: '2350', dep_time: '0815', arival_time: '1032'}, {flt_num: '0843', dep_time: '1030', arival_time: '1251'}, {flt_num: '0413', dep_time: '1335', arival_time: '1559'}, {flt_num: '1601', dep_time: '1520', arival_time: '1747'}, {flt_num: '0468', dep_time: '1720', arival_time: '1950'}, {flt_num: '1888', dep_time: '1915', arival_time: '2142'}, {flt_num: '2940', dep_time: '2145', arival_time: '0010'}]


  if !date.saturday? && !date.sunday?
    flight_info.each do |flight|
       Flight.create(flight_number: flight[:flt_num], departure_city: "ATL", arival_city: "JFK", departure_date_time: date.change(hour: flight[:dep_time][0..1].to_i, min: flight[:dep_time][2..3].to_i), arival_date_time: date.change(hour: flight[:arival_time][0..1].to_i, min: flight[:arival_time][2..3].to_i), price: 200 + flight[:flt_num][1..2].to_i )
    end
  end


  date += 1.day
  puts "finished  #{date}"
end




puts "Done"
