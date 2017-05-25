class ProjectsController < ApplicationController
	layout "application"
	
	def index
		render "/layouts/projects"
	end

end
