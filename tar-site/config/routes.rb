Rails.application.routes.draw do
  
  resources :about
  resources :projects
  resources :posts 

  root controller: 'about', action: 'index'
end
