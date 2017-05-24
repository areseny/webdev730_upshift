import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.deleteAndRedirect = this.deleteAndRedirect.bind(this)
    this.favoriteCounter = this.favoriteCounter.bind(this)
  }

  deleteAndRedirect() {
    this.props.deleteSession().then(() => this.props.history.push('/'))
  }

  favoriteCounter() {
    if (Object.keys(this.props.currentUser.favorites).length !== 0) {
      return (<Link to='favorites'><p className='favorite-counter'>{Object.keys(this.props.currentUser.favorites).length}</p></Link>)
    }
  }

  render() {

    if (this.props.loggedIn) {
      return (
        <div className="navbar_all_elements">
          <div className="navbar_left">
            <header>
              <Link to="/"><h1><span className='up'>UP</span>shift</h1></Link>
            </header>
          </div>
          <div className="navbar_right">
            <div className='navbar-favorite-container'>
              {this.favoriteCounter()}
              <Link to={`/favorites`}><i className="fa fa-heart navbar-favorite-button-logged-in fa-2x" aria-hidden="true"></i></Link>
            </div>
            &nbsp;
            <span><button onClick={this.deleteAndRedirect}>Log Out</button></span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar_all_elements">
          <div className="navbar_left">
            <header>
              <Link to="/"><h1><span className='up'>UP</span>shift</h1></Link>
            </header>
          </div>
          <div className="navbar-right-logged-out">
            <i className="fa fa-heart-o navbar-empty-heart fa-2x" aria-hidden="true"></i>
            <span className='navbar-sign-up'><Link to="/signup">Sign Up</Link></span>
            <span><Link to="/login">Log In</Link></span>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Navbar);
