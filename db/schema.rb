# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170818140603) do

  create_table "flights", force: :cascade do |t|
    t.string   "flight_number"
    t.string   "departure_city"
    t.string   "arival_city"
    t.datetime "departure_time"
    t.datetime "arival_time"
    t.string   "total_fly_time"
    t.integer  "price"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "middle_name"
    t.string   "frequent_flyer_number"
    t.string   "gender"
    t.datetime "dob"
    t.string   "email"
    t.string   "telephone"
    t.string   "flight_number"
    t.string   "confirmation_number"
    t.datetime "departure_date"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["confirmation_number"], name: "index_reservations_on_confirmation_number", unique: true
  end

end
