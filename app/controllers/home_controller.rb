class HomeController < ApplicationController
  def index
    @towns = CodePostal.all.limit(15)
  end
  
  def search
    @towns = CodePostal.where('code_postal LIKE ?', "%2021%").limit(15)
  end
end
