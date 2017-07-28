puts "Seeding..."

Flight.create(flight_number: 510, departing: "JFK", ariving: "LAX", departure_date_time: '2018-03-22 11:18:00', arival_date_time: '2018-03-22 14:19:00', price: 350 )


Flight.create(flight_number: 432, departing: "LAX", ariving: "JFK", departure_date_time: '2018-03-22 17:30:00', arival_date_time: '2018-03-22 21:11:00', price: 400 )

Flight.create(flight_number: 111, departing: "JFK", ariving: "FLL", departure_date_time: '2018-03-22 08:30:00', arival_date_time: '2018-03-22 10:50:00', price: 200 )

puts "Done"
