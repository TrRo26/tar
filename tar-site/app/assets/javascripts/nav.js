$(document).ready(function(e) {

	$('.nav-tab').on('click', function(e) {
	  e.preventDefault()
	  $content = $(this).text()
	  console.log($content)
	  $.ajax({
	  	url: $content,
	  	type: 'GET',
	  	success: function(result) {
	  		$('.hook').append(result)
	  	}
	  })
	})

})