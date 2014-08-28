Portfolio::Application.routes.draw do
  get "/" => "application#index"
  resources :jobs
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :jobs
    end
  end
end
