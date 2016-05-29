class HomeController < ApplicationController
  def index
    @towns = CodePostal.all.limit(100)
  end
  
  def search
    @towns = CodePostal.where('code_postal LIKE ?', "%#{params[:search]}%")
    render json: @towns
  end
end
