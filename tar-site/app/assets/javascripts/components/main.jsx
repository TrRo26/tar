
var Categories = React.createClass({
	render: function() {
		var categoryStyle = {
      position: 'relative',
      border: '1px solid black',
      display: 'table-cell',
      height: 800,
      width: 'calc(33.33% - 2px)',
      float: 'left'
    }
    return (
    	<div style={categoryStyle}></div>
    )
	}
})

ReactDOM.render(
	<Cateogries />,
	document.getElementById('app')
)