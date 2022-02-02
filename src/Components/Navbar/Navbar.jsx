import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css";
import img from "./images/facebook.png";
const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.search_bar}>
                <img className={s.img_logo} src={img} alt="img" />
                <div className={s.inp}>
                    <input className={s.search} type="text" >
                    </input>
                </div>
            </div>
            <div className={s.links}>
            </div>
            <div className={s.navlinks}>
                <Link to='/' > Home </Link>
                <Link to='/about' > About</Link>
                <Link to='/profile' > Profile</Link>
                <Link to='/acount' > Aconut</Link>
                <Link to='/services' > Services</Link>
                <Link to='/dialogs' > Dialogs</Link>
            </div >
            <div className={s.profil}>
            <p>users  profil</p>
            </div>
        </div>
    )
}

export default Navbar;


