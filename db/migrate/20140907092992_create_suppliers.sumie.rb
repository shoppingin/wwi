# This migration comes from sumie (originally 20140707192552)
class CreateSuppliers < ActiveRecord::Migration
  def change
    create_table :spree_suppliers do |t|
      t.timestamps
    end
  end
end
