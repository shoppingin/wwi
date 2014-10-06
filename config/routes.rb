Rails.application.routes.draw do
  mount Spree::Core::Engine, :at => '/'

  get 'brands' => 'brands#index'

  get 'shops' => "suppliers#index"
end
