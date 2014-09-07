# This migration comes from sumie (originally 20140707195920)
class AddSupplierIdToProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :supplier_id, :integer
  end
end
