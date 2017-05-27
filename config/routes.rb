Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      devise_for :users
      resources :users, only: [:index] do
        collection do
          post 'authenticate' => 'authentication#authenticate_user'
        end
      end
    end
  end
end
