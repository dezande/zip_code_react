Rails.application.routes.draw do
  post '/', to: 'home#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
