// CANNOT GET RAILS TO RECOGNIZE REACT-ROUTER - TREATS IT AS IT DOESN'T EXIST

var App = React.createClass({
	
	render() {
		return(
			<div>
			<h2>FUCK THIS GARBAGE</h2>
			<ReactRouter.Router history={hashHistory}>
				<ReactRouter.Route path='/categories' component={Categories} />
			</ReactRouter.Router>
			</div>
		)
	}
})

// ONLY THE FOLLOWING ON THE PAGE CORRECTLY RENDERS Categories 
			// <div>
			// 	<Categories />
			// </div>
