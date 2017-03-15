import React,{ Component }from 'react'
import { IndexLink,Link } from 'react-router'

export default class Navbar extends Component{
    render(){
        return (
            <div className="row clearfix">
              <div className="col-md-12 column">
                <nav className="navbar navbar-default" role="navigation">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#nav-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link to='/' className="navbar-brand">
                      React Demo
                    </Link>
                  </div>
                  <div className="collapse navbar-collapse" id="nav-collapse">
                    <ul className="nav navbar-nav">
                      <li>
                        <IndexLink to='/'>
                          欢迎页
                        </IndexLink>
                      </li>
                      <li>
                        <Link to='/msg'>
                          留言板
                        </Link>
                      </li>
                      <li>
                        <Link to='/todo'>
                          待办事项(新功能)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}
