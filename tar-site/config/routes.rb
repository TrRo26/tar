Rails.application.routes.draw do
  
  mount Ckeditor::Engine => '/ckeditor'
  resources :about
  resources :projects
  resources :posts 

  root controller: 'about', action: 'index'
end
