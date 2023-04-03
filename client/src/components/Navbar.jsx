import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav class="navbar fixed-top" style={{ borderBottom:'0.5px solid black', background:'white' }}>
            <div class="container-fluid">
            
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"><img src="/icons/Hamburgir-Menu.png" alt="" width="20rem"/></span>
                </button>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tripeazium</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#homeCntainr">Home</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#srvcsCntainr">Services</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#abtCntainr">About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#team">Contact</a>
                                </li>

                                <li> 
                                    <hr class="divider"/>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#srvcsCntainr">Sign Up / Sign In</a>
                                </li>

                                <li> 
                                    <hr class="divider"/>
                                </li>

                            </ul>
                        </div>

                    </div>

                <div class="navbar-brand">
                    <Link to="/">
                        <img src="/icons/Tripeazium-Logo.png" alt="Tripeazium" class="navbar-brand-logo" width="100rem" />
                    </Link>
                </div>
            
                <div class="sub-container-fluid">
                    
                    <div class="install-app">
                        <a href="#play"><img src="/icons/Play-Store.png" alt="Enjoy our app!" class="install-app-icon" width="27.5rem"/></a>
                        <a href="#app"><img src="/icons/App-Store.png" alt="Enjoy our app!" class="install-app-icon" width="27.5rem"/></a>
                    </div>
    
                    <div class="signUp-and-signIn">
                        <Link to="/login">
                            <button type="button" class="btn btn-outline-dark">Sign Up / Sign In</button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>

    
    

    
    </>
  )
}

export default Navbar;