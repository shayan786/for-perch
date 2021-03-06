class ProductsController < ApplicationController
  before_action :set_products, only: [:show, :edit, :update, :destroy]

  # GET /products
  # GET /products.json
  def index
    @products = Product.where(cart_id: nil).order("id DESC")
  end

  def create
    # create is just creating a product with a cart id
    existing_product = Product.find(params['productId'])

    @product = Product.new(
      cart_id: params['cartId'].to_i,
      title: existing_product.title,
      price: existing_product.price,
      image: existing_product.image
    )

    respond_to do |format|
      if @product.save
        format.all { render json: {status: 200, product: @product} }
      else
        format.all { render json: {status: 400} }
      end
    end
  end

  # DELETE /products/:id
  def destroy
    @product.destroy

    respond_to do |format|
      format.all { render json: {status: 200} }
    end
  end

  # POST /products
  # POST /products.json
  # def create
  #   respond_to do |format|
  #     if @comment.save
  #       format.html { redirect_to @comment, notice: "Comment was successfully created." }
  #       format.json { render :show, status: :created, location: @comment }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @comment.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # GET /comments/1
  # # GET /comments/1.json
  # def show
  # end

  # # GET /comments/new
  # def new
  #   @comment = Comment.new
  # end

  # # GET /comments/1/edit
  # def edit
  # end

  # # POST /comments
  # # POST /comments.json
  # def create
  #   @comment = Comment.new(comment_params)

  #   respond_to do |format|
  #     if @comment.save
  #       format.html { redirect_to @comment, notice: "Comment was successfully created." }
  #       format.json { render :show, status: :created, location: @comment }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @comment.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /comments/1
  # # PATCH/PUT /comments/1.json
  # def update
  #   respond_to do |format|
  #     if @comment.update(comment_params)
  #       format.html { redirect_to @comment, notice: "Comment was successfully updated." }
  #       format.json { render :show, status: :ok, location: @comment }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @comment.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /comments/1
  # # DELETE /comments/1.json
  # def destroy
  #   @comment.destroy
  #   respond_to do |format|
  #     format.html { redirect_to comments_url, notice: "Comment was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_products
    @product = Product.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def product_params
    params.require(:product).permit(:title, :price, :image)
  end
end
