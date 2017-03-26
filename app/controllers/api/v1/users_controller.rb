module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: User.all#[ {id: 1, name: 'User1'}, {id: 2, name: 'User2'}]
      end
    end
  end
end
