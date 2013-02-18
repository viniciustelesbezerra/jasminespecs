class ApplicationController < ActionController::Base
  respond_to :json, :html

  def index
  end
  
  def search
  	render json: { response:"ok", list:[1,2,3,90] }
  end

end
