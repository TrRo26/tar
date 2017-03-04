// With the Rails-React Gem, do not need to require 'react' and 'react-dom'
// With Rails, can use the react_component shortcut - RenderDOM not needed

var Categories = React.createClass({
	render: function() {
    
    var categoryStyle = {
      position: 'relative',
      border: '1px solid black',
      height: 800,
      width: 'calc(33.33% - 2px)',
      float: 'left',
      fontSize: 50,
      textAlign: 'center',
      lineHeight: '7vh',
      backgroundColor: this.props.bgcolor
    }

    // Need to find DRY way of adding individual category css:
    // var projectImage = {
    //   backgroundColor: '#FDF3E7',
    //   // backgroundImage: "url('./cat_project_bw.jpg')",  //find proper syntax for this to work
    //   backgroundSize: 'contain',
    //   backgroundRepeat: 'no-repeat'
    // }

    return (
    	<div>
  			<div style={categoryStyle}>
  				<About />
  			</div>
    		<div style={categoryStyle}>
    			<Projects />
    		</div>
    		<div style={categoryStyle}>
    			<Blog />
    		</div>
    	</div>
    )
	}
})

// Use for multiple styles:
// style={Object.assign(categoryBorderStyle, categoryLetterStyle)}