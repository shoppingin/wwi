# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Spree::Core::Engine.load_seed if defined?(Spree::Core)
Spree::Auth::Engine.load_seed if defined?(Spree::Auth)

Spree::Role.create(name: 'vendor')

# Page
Spree::Page.create!(title: 'about', slug: "/about", body: "fill me", layout: "spree_application", visible: true)
Spree::Page.create!(title: 'home page', slug: "/home", body: "fill me", layout: "spree_application", visible: true)
Spree::Page.create!(title: 'footer', slug: "/footer", body: "fill me", layout: "spree_application", visible: true)
