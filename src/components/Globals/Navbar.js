import React, { Component } from "react";
import {Link} from "gatsby";
import logo from "../../images/logo.svg";
import {FaCartArrowDown} from "react-icons/fa";



export default class Navbar extends Component {
    state ={
        navbarOpen:false,
        css:"collapse navbar-collapse",
        links:[
            {
                id:1,
                path:'/',
                text:'home'
            },
            {
                id:2,
                path:'/about',
                text:'about' 
            },
            {
                id:3,
                path:'/gallery',
                text:'gallery' 
            },
            {
                id:4,
                path:'/Products',
                text:'products' 
            },
            {
                id:5,
                path:'/',
                text:'Contact us' 
            },
            
            


        ] 
    };
    navbarHandler = () => {
        this.state.navbarOpen?this.setState(
            {navbarOpen:false,css:"collapse navbar-collapse"})
            :this.setState({
                navbarOpen:true,
                css:"collapse navbar-collapse show"
            });
    };
    render(){
        return( 
        <nav className="navbar navbar-expand-sm
        bg-light navbar-light">
            <Link to ="/" className="navbar-brand">
                <h1>Scoopy's</h1>
            </Link>
            <button className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
                <ul className="navbar-nav mx-auto">
                    {
                        this.state.links.map(link =>{
                            return(
                                <li key={link.id} className="nav-item">
                                <Link to={link.path} className="nav-link text-capitalize">
                                    {link.text}
                                </Link>
                                </li>
                            )
                        })}
                        <li className="nav-item ml-sm-20">
                            <FaCartArrowDown className="cart-icon"/>
                        </li>
                </ul>
            </div>
        </nav>
        );
    }
}