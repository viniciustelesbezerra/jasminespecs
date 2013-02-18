class ApplicationController < ActionController::Base
  respond_to :json, :html

  def index
  end
  
  def search
  	render json: {resposta:"ok"}
  end

end
