# This migration comes from spree_google_base (originally 20120326184636)
class NamespaceGoogleBase < ActiveRecord::Migration
  def up
    rename_table :taxon_maps, :spree_taxon_maps
  end

  def down
    rename_table :spree_taxon_maps, :taxon_maps
  end
end
