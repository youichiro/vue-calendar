Rails.application.routes.draw do
  resources :events, only: [:index, :show, :create, :update, :destroy]
  resources :calendars, only: [:index, :show, :create, :update, :destroy]
end
