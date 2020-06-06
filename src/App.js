import React from 'react';
import './App.css';
import Home from './pages/home/home.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Work01 from './pages/home/contents01.jsx';
import CFYOU from './pages/home/CFYOU.jsx'
import ABOUTME from './pages/home/Aboutme.jsx'
import Header from './pages/header/header.jsx'

function App() {
  return (
    <div className="First-view">
      <BrowserRouter>

      <Route path='/' exact component={Header01} />
      <Route path='/about' exact component={Header01} />
      <Route path='/cfyou' exact component={Header01} />

      <div>
      
      <Route path='/' exact component={FV01} />
      <Route path='/about' exact component={ABOUT_ME} />
      <Route path='/cfyou' exact component={WORK_CFYOU} />
      </div>

      <footer>
        <div className="footer_box">
        <p className="footer_p1">Contact me on...</p>
        <div className="footer_snsbox">
        <p className="footer_snsName"><a link href="mailto:furuchan6666@gmail.com">Email</a></p>
        <p className="footer_snsName2"><a link href="https://twitter.com/furuchaan" target="blank">Twitter</a></p>
        </div>
        <p className="footer_h3">© Yuki Furutani 2020</p>
        </div>
  
      </footer>

      </BrowserRouter>
    
    </div>

  );
}

const Header01 = () => (
  <div className="">
    <Header />
  </div>
)



const FV01 = () => (
  <div className="Section_WORK_CFYOU">
    <Home></Home>
    <div  className="TITLE_WORKS">
    <img src="works.svg" alt=""/>
    </div>
    <Work01></Work01>
    <Link to ="/cfyou"><Button01></Button01></Link>
  </div>
)



const WORK_CFYOU = () => (
  <div>
    <CFYOU></CFYOU>
  </div>
)

const ABOUT_ME = () => (
  <div>
    <ABOUTME></ABOUTME>
  </div>
)


class Button01 extends React.Component {
  render() {
    return (
      <Link to='/cfyou'><a className="Button_01">View More→</a></Link>
      
    )
  }
}


export default App;
