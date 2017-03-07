// With the Rails-React Gem, do not need to require 'react' and 'react-dom'
// With Rails, can use the react_component shortcut - RenderDOM not needed

// Use for multiple styles:
// style={Object.assign(categoryBorderStyle, categoryLetterStyle)}

// Not needed with Rails-React gem:
// ReactDOM.render(
//   <About />,
//   document.getElementById('container')
// )




// class ReplyForm extends React.Component {
//   constructor() {
//     super()
//   },

//   render() {
//     return(
//       <div> Im ReplyForm </div>
//     )
//   }
// }


// class CommentBox extends React.Component {
  
//   constructor() {
//     super();
//     this.state = {
//       showReply: false
//     }
//   }

//   onClick(e){
//     e.preventDefault();
//     this.setState({showReply: !this.state.showReply})
//   }
  
//   render() {
//     return (
//       <div>
//         <p>Some comment</p>
//          <a onClick={this.onClick.bind(this)} href='#'>Post a reply to this comment</a>
//         {this.state.showReply && < ReplyForm / >}
//       </div>
//     )
//   }
// }