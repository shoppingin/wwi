# This migration comes from spree_omnikassa (originally 20121111162823)
class AddPaymentReferenceToOmnikassaPayment < ActiveRecord::Migration
  def change
    add_column :spree_omnikassa_payments, :payment_id, :integer
  end
end
