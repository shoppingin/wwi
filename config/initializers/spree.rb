Spree::OrdersController.class_eval do
  respond_override :populate => { :html => { :success => lambda {
    redirect_to products_path(:_q=>'0') } } }
end

Spree::Api::Config.requires_authentication = false

# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false
  config.allow_guest_checkout = true
end

Spree.user_class = "Spree::User"
Rails.application.config.spree.payment_methods << Spree::PaymentMethod::Omnikassa

Spree::Image.attachment_definitions[:attachment][:styles] = { mini: '69x98>', small: '190x290>', product: '311x467">', large: '600x600>' }
