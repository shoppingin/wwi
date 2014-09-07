Rails.application.routes.draw do
  root 'application#index'

  #get '/login' => 'application#index'

  mount Spree::Core::Engine, :at => '/'
  get '/*path' => 'home#index'
end
