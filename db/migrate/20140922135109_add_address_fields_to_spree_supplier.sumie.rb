# This migration comes from sumie (originally 20140922071539)
class AddAddressFieldsToSpreeSupplier < ActiveRecord::Migration
  def change
    add_column :spree_suppliers, :country_id, :integer
    add_column :spree_suppliers, :city, :string
    add_column :spree_suppliers, :address1, :string
    add_column :spree_suppliers, :zipcode, :string
  end
end
