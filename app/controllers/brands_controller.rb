class BrandsController < Spree::StoreController
  def index
    brand = Spree::Taxonomy.where(name: 'Brand').first
    @brands = brand.taxons.sort_by(&:name).group_by{|b| b.name[0] }
  end
end
