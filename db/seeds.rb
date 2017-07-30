puts "Seeding..."

Flight.create(flight_number: 510, departure_city: "JFK", arival_city: "LAX", departure_date_time: '2018-03-22 11:18:00', arival_date_time: '2018-03-22 14:19:00', price: 350 )


Flight.create(flight_number: 432, departure_city: "LAX", arival_city: "JFK", departure_date_time: '2018-03-22 17:30:00', arival_date_time: '2018-03-22 21:11:00', price: 400 )

Flight.create(flight_number: 111, departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 08:30:00', arival_date_time: '2018-03-22 10:50:00', price: 200 )

Flight.create(flight_number: 75, departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 05:10:00', arival_date_time: '2018-03-22 07:50:00', price: 200 )

puts "Done"
