import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 40%;
    color: #7D7987;
    font-size: 18px;
    align-items:  baseline;
    font-weight: 400;
    margin-bottom: 0;

    li a{
        list-style: none;
        text-decoration: none;
    }
@media screen and (max-width:1024px){
     width: 60%;
}
@media screen and (max-width:760px){
     position: fixed;
    left: -1px;
    height: 92vh;
    top: 12vh;
    background-color:  #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    z-index: 20;
    transform: ${({open}) => open ?'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s ease;


`;

const Navlist=({open})=>{
    return(
            <Ul open={open}>
                   <li> <NavLink to="/" className="navlinks" activeStyle={{fontWeight: "700",color:"#233348"}}>Product</NavLink> </li>
                   <li> <Link  className="navlinks" to="/">Bike Type</Link> </li> 
                   <li> <Link to="/" className="navlinks">About us</Link> </li>
                   <li> <Link to="/" className="navlinks">Testimonials</Link> </li>
                   <li> <Link to="/" className="navlinks">Contact</Link></li>
           </Ul>
    )
}
export default Navlist;