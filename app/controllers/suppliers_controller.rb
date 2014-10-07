class SuppliersController < Spree::StoreController

  def index
    @suppliers = Spree::Supplier.all#.active
  end
end
