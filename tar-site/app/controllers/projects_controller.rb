class ProjectsController < ApplicationController
	layout "application"

	def index
		p "PROJ INDEX"
		p params

		respond_to do |f|
			f.js
		end
		# render js: "alert('AHHHHH')"
	end

	def show

	end

end
