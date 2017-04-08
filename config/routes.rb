Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :users, only: [:index, :create] do
        collection do
          post 'authenticate' => 'authentication#authenticate_user'
        end
      end
    end
  end
end
