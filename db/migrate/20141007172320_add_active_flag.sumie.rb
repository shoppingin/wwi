# This migration comes from sumie (originally 20141007170509)
class AddActiveFlag < ActiveRecord::Migration
  def change
    add_column :spree_suppliers, :active, :boolean, default: false
    add_attachment :spree_suppliers, :logo
  end
end
