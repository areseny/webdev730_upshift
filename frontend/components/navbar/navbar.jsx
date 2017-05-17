import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar_all_elements">
          <span className="navbar_left">
            <header>
              <Link to="/"><h1>UpShift</h1></Link>
            </header>
          </span>
          <span className="navbar_right">
            <Link to={`/favorites/${this.props.currentUser.id}`}><img className="logged_in_heart" src="https://i.stack.imgur.com/iBCpb.png"/></Link>
            &nbsp;
            <button onClick={this.props.deleteSession}>Log Out</button>
          </span>
        </div>
      )
    } else {
      return (
        <div className="navbar_all_elements">
          <span className="navbar_left">
            <header>
              <Link to="/"><h1>UpShift</h1></Link>
            </header>
          </span>
          <span className="navbar_right">
            Fake Heart
            &nbsp;
            <span><Link to="/signup">Sign Up</Link></span>
            &nbsp;
            <span><Link to="/login">Log In</Link></span>
          </span>
        </div>
      )
    }
  }
}

export default Navbar;
