
var About = React.createClass({
  render: function() {

    return (
    	<div>
      	<h1>
      		<div className='cat-title'>a</div>
      		<div className='cat-title'>b</div>
      		<div className='cat-title'>o</div>
      		<div className='cat-title'>u</div>
      		<div className='cat-title'>t</div>
      	</h1>
      </div>
    )
  }
});

// Not needed with Rails-React gem:
// ReactDOM.render(
//   <About />,
//   document.getElementById('container')
// )







// ReactDOM.render(
//  <Image src='' />,
//  document.getElementById('app')
// )



// Fade in upon image load
// var Image = React.createClass({
// 	getInitialState: fucntion() {
// 		return {
// 			loaded: false
// 		};
// 	},

// 	onImageLoad: function() {
// 		if(this.isMounted()) {
// 			this.setState({ loaded: true });
// 		}
// 	},

// 	componentDidMount: function() {
// 		var imgTag = ReactDOM.findDOMNode(this.refs.img);
// 		var imgSrc = imgTag.getAttribute('src');
// 		var img = new window.image();
// 		img.onload = this.onImageLoad;
// 		img.src = imgSrc;
// 	},

// 	render: function() {
// 		var { className, ...props } = this.props;
// 		// var imgClasses = 'image';
// 		var rootClassName = classNames(className, 'image', {
// 			'image-loaded': this.state.loaded,
// 		});
// 	}
// });

