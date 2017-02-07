Rails.application.routes.draw do
  resources :blog
  resources :projects

  root 'mains#index'
end
