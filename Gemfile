source 'https://rubygems.org'

ruby '2.1.1'

gem 'rails_12factor', group: :production # only for heroku

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.6'
# Use sqlite3 as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails', '3.1.2'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]


### SPREE GEMS ###

#TODO: should be using shoppingin/spree gem or http://guides.spreecommerce.com/developer/logic.html
gem 'spree',              github: 'shoppingin/spree',        branch: '2-3-stable'
gem 'spree_auth_devise',  github: 'spree/spree_auth_devise', branch: '2-3-stable'

gem 'sumie',              github: 'shoppingin/sumie', branch: 'master'
gem 'spree_strike_price', github: 'shoppingin/spree_strike_price'
gem 'spree_i18n',         github: 'spree/spree_i18n', branch: '2-3-stable'
gem 'spree_omnikassa',    github: 'Willianvdv/spree_omnikassa'
gem 'spree_sitemap',      github: 'jdutil/spree_sitemap', branch: '2-3-stable'
gem 'whenever', :require => false

### PROJECT SETUP ###
gem 'quiet_assets', group: :development

gem 'spree_static_content', github: 'spree/spree_static_content', branch: '2-3-stable'
gem 'pry', group: [:development, :test]

gem "spree_google_base", github: "shoppingin/spree-google-base"
