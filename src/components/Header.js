import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";


const Header = () => {
    return (
        <>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                            
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>HOME</NavLink> &nbsp; &nbsp; &nbsp;
                                        <NavLink to='/store'>OUR STORE</NavLink>&nbsp; &nbsp; &nbsp;
                                        <NavLink to='/'>BLOGS</NavLink>&nbsp; &nbsp; &nbsp;
                                        <NavLink to='/'>CONTACT</NavLink>&nbsp; &nbsp; &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header