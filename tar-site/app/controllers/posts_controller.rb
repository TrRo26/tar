class PostsController < ApplicationController
	layout "application"
	
	def index
		render "/layouts/blog"
	end

end
