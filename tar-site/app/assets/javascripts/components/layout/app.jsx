// import { browserHistory } from 'react-router'

var App = React.createClass({
	
	render() {
		return(
			<ReactRouter.Router>
				<ReactRouter.Route path='/' component={App}>
					<ReactRouter.IndexRoute component={Categories} />
					<ReactRouter.Route path='/about' component={About} />
					<ReactRouter.Route path='/projects' component={Projects} />
					<ReactRouter.Route path='/blog' component={Blog} />
				</ReactRouter.Route>
			</ReactRouter.Router>
		)
	}
})

			// <div>
			// 	<Categories />
			// </div>