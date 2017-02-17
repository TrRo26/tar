Rails.application.routes.draw do
  
  resources :posts
  resources :projects

  root controller: 'main', action: 'index'
end