# This migration comes from sumie (originally 20140707201325)
class CreateSpreeSuppliersTaxons < ActiveRecord::Migration
  def change
    create_table :spree_suppliers_taxons, id: false do |t|
      t.integer :supplier_id
      t.integer :taxon_id
    end
    add_index :spree_suppliers_taxons, :supplier_id
    add_index :spree_suppliers_taxons, :taxon_id
  end
end
