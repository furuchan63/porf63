import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';



export default class Header extends React.Component {
    render(){
        return(
            <div className="">
              <Route path='/' exact component={Header01} />
              <Route path='/about' exact component={Header01} />
              <Route path='/cfyou' exact component={Header01} />
            </div>
        );
    }
}


class Header01 extends React.Component {
  render() {
    return (
      <div className="">
        <header className="header_pc">
          <div className="headerLogo">
          <Link to='/'><img src="./yuki_logo.svg" alt="" height="40px" />　</Link>
          </div>
         <ul>
           <li><Link to='/'><a className="Title_about">Work</a></Link></li>
           <li><Link to='/about'><a className="Title_about">About</a></Link></li>
         </ul>
         </header>
         
         <header className="header_sp">
         <div className="headerLogo">
          <Link to='/'><img src="./yuki_logo.svg" alt="" height="40px" />　</Link>
          </div>
         <ul>
           <li><Link to='/'><a className="Title_about">Work</a></Link></li>
           <li><Link to='/about'><a className="Title_about">About</a></Link></li>
         </ul>


         </header>

      </div>
    )
  }
}