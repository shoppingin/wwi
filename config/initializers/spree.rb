# FIXME:
#fail("No taxonomies called 'Brand'") if Spree::Taxonomy.where(name: 'Brand').empty?

# Spree::OrdersController.class_eval do
#   respond_override :populate => { :html => { :success => lambda {
#     redirect_to products_path(:_q=>'0') } } }
# end

Spree::ProductsController.class_eval do
  before_filter :find_categories, only: [:index]

  private

  def find_categories
    @categories = Spree::Product.group("spree_products.id").joins(:taxons)
  end
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
  config.allow_guest_checkout = true
end

Spree.user_class = "Spree::User"
Rails.application.config.spree.payment_methods << Spree::PaymentMethod::Omnikassa

Spree::Image.attachment_definitions[:attachment][:styles] = { mini: '69x98>', small: '190x290>', product: '311x467">', large: '600x600>' }

use_s3 = ENV['S3'] || false

if use_s3
  Spree::Image.attachment_definitions[:attachment][:url] = "s3-eu-west-1.amazonaws.com"
  Spree::Image.attachment_definitions[:attachment][:storage] = :s3
  Spree::Image.attachment_definitions[:attachment][:bucket] = ENV['S3_BUCKET_NAME']
  Spree::Image.attachment_definitions[:attachment][:s3_credentials]= {
   :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
   :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
  }

  Paperclip::Attachment.default_options[:s3_host_name] = "s3-eu-west-1.amazonaws.com"
  Paperclip::Attachment.default_options[:storage] = :s3
  Paperclip::Attachment.default_options[:bucket] = ENV['S3_BUCKET_NAME']
  Paperclip::Attachment.default_options[:s3_credentials] = {
    :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
    :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
  }
end
