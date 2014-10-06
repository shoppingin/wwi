class SuppliersController < Spree::StoreController

  def index
    @shops = Spree::Supplier.all
  end
end
