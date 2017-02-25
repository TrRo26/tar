var React = React.require('react')
var ReactDOM = React.require('react-dom')

var Projects = React.createClass({

  // getInitialState: function() {

  // },

  handleClick: function () {
    var projHideShow = 'proj-image'

    if (projHideShow === 'proj-image') {
      let projHideShow = 'proj-no-image'
    }
    // projHideShow == ('proj-image' ? 'proj-no-image' : 'proj-image')
  },

	render: function () {

    var projHideShow = 'proj-image'
    // var projShow = 'proj-image';
    // var projHide = 'proj-no-image';

		return (
			<div className='category' onClick={this.handleClick} id={projHideShow}>
          <h1>
            <div className='cat-title'>p</div>
            <div className='cat-title'>r</div>
            <div className='cat-title'>o</div>
            <div className='cat-title'>j</div>
            <div className='cat-title'>e</div>
            <div className='cat-title'>c</div>
            <div className='cat-title'>t</div>
            <div className='cat-title'>s</div>
          </h1>
			</div>
		)
	}

})

// ReactDOM.render(
//     <Projects />,
//     document.getElementById('cat-wrapper')
// )

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {active: false};
//     }

//     click() {
//         this.setState({active: true});
//     }

//     render() {
//         let classes = classnames('specialbutton', {active: this.state.active});
//         return <button className={classes} onClick={this.click.bind(this)}>Click me</button>;
//     }
// }
