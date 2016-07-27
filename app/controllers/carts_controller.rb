class CartsController < ApplicationController

  def create
    @cart = Cart.new

    respond_to do |format|
      if @cart.save
        format.all { render json: {status: 200, cartId: @cart.id} }
      else
        format.all { render json: {status: 400} }
      end
    end
  end

end