import React from 'react';
import '../css/Navbar.css';
import logo from '../images/bag.png';
class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="flex nav-left">
                    <a className="link">WOMEN</a>
                    <a className="link">MEN</a>
                    <a className="link">KIDS</a>
                </div>
               <div>
                   <img className="navlink" width="40px" height="40px" src={logo}/>
               </div>
                <div className="flex right">
                    <div className="flex navlink space">
                        <p>$</p>
                        <svg className="mt2" height="10" width="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <svg className=" navlink" height="20" width="20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393  11.003h11.794l2.674-11.003h-17.861z"/></svg>
                </div>
            </div>
        );
    }
}
export default Navbar;