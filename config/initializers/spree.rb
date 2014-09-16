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
  config.use_s3 = true
  config.s3_bucket = 'shoppinginheroku'
  config.s3_access_key = "tsyren.hey"
  config.s3_secret = "J0s120o78669Jy9"
  config.attachment_url = ":s3_eu_url"
  config.s3_host_alias = "s3-eu-west-1.amazonaws.com"

  config.allow_guest_checkout = true
end

Spree.user_class = "Spree::User"
Rails.application.config.spree.payment_methods << Spree::PaymentMethod::Omnikassa

Spree::Image.attachment_definitions[:attachment][:styles] = { mini: '69x98>', small: '190x290>', product: '311x467">', large: '600x600>' }

Paperclip.interpolates(:s3_eu_url) do |attachment, style|
"#{attachment.s3_protocol}://#{Spree::Config[:s3_host_alias]}/#{attachment.bucket_name}/#{attachment.path(style).gsub(%r{^/},"")}"
end
