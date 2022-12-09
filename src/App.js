import React, { useState } from 'react';
import './App.css';
function App() {
  const [latitude,setLatitude]=useState('')
  const [longitude,setLongitude]=useState('')
  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  },[])
  return (
    <>
        <nav class="navbar bg-light fixed-top">
            <div class="container-fluid">
            
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"><img src="/icons/Hamburgir-Menu.png" alt="Hamburger Menu" width="20rem"/></span>
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
                                    <a class="nav-link active" href="#">Contact</a>
                                </li>

                                <li> 
                                    <hr class="divider"/>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Sign Up / Sign In</a>
                                </li>

                                <li> 
                                    <hr class="divider"/>
                                </li>

                            </ul>
                        </div>

                    </div>

                <a class="navbar-brand" href="#"><img src="/icons/Tripeazium-Logo.png" alt="Tripeazium" class="navbar-brand-logo" width="100rem" /></a>
            
                <div class="sub-container-fluid">
                    
                    <div class="install-app">
                        <a href="#"><img src="/icons/Play-Store.png" alt="Enjoy our app!" class="install-app-icon" width="27.5rem"/></a>
                        <a href="#"><img src="/icons/App-Store.png" alt="Enjoy our app!" class="install-app-icon" width="27.5rem"/></a>
                    </div>
    
                    <div class="signUp-and-signIn">
                        <button type="button" class="btn btn-outline-dark">Sign Up / Sign In</button>
                    </div>

                </div>
            </div>
        </nav>

        <div class="container" id="homeCntainr">
            <video src="/videos/Tripeazium Final Theme Video.mp4" muted autoplay loop></video>
        </div>

        {/* <!-- -----------------------------------------HEADING COMPONENT------------------------------------------- --> */}
        <div class="hdng-Container">
                <div class="hdng-Sub-Container">
                    <h1 class="h-One">
                        TRIPEAZIUM
                    </h1>

                    <h3 class="h-Three">
                        MAKES YOUR TRIP EAZY !
                    </h3>
                </div>
        </div>
        {/* <!-- -----------------------------------------HEADING COMPONENT------------------------------------------- --> */}
        

        {/* <!-- ----------------------------------------SERVICES GRID COMPONENT---------------------------------------- --> */}
        <div class="srvcsContainer" id="srvcsCntainr">
            <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="hotel-tab" data-bs-toggle="tab" data-bs-target="#hotel-tab-pane" type="button" role="tab" aria-controls="hotel-tab-pane" aria-selected="true">
                        <img src="icons/Hotel-Icon.png" alt="Hotels" width="30rem"/>Hotels</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="restaurant-tab" data-bs-toggle="tab" data-bs-target="#restaurant-tab-pane" type="button" role="tab" aria-controls="restaurant-tab-pane" aria-selected="false"><img src="icons/Restaurant-Icon.png" alt="Restaurants" width="30rem"/>Restaurants</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="cafes-and-lounges-tab" data-bs-toggle="tab" data-bs-target="#cafes-and-lounges-tab-pane" type="button" role="tab" aria-controls="cafes-and-lounges-tab-pane" aria-selected="false"><img src="icons/Cafes-&-Lounges-Icon.png" alt="Cafes & Lounges" width="30rem"/>Cafés & Lounges</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="vacation-tab" data-bs-toggle="tab" data-bs-target="#vacation-tab-pane" type="button" role="tab" aria-controls="vacation-tab-pane" aria-selected="false"><img src="icons/Vacation-Icon.png" alt="icons/Vacation" width="30rem"/>Vacation</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="trip-planner-tab" data-bs-toggle="tab" data-bs-target="#trip-planner-tab-pane" type="button" role="tab" aria-controls="trip-planner-tab-pane" aria-selected="false"><img src="icons/Trip-Planner-Icon.png" alt="Trip Planner" width="30rem"/>Trip Planner</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="nearby-activities-tab" data-bs-toggle="tab" data-bs-target="#nearby-activities-tab-pane" type="button" role="tab" aria-controls="nearby-activities-tab-pane" aria-selected="false"><img src="icons/Activities-Icon.png" alt="Nearby Activities" width="30rem"/>Nearby Activities</button>
                </li>
            </ul>

            {/* <!-- ----------------------------------------SERVICES GRID COMPONENT---------------------------------------- --> */}

            <div class="tab-content" id="myTabContent">


                <div class="hotel tab-pane fade show active" id="hotel-tab-pane" role="tabpanel" aria-labelledby="hotel-tab" tabindex="0">

                    <h3 class="htlsTabHdng"><b>Best Hotels in the City</b></h3>

                    {/* <!-- ----------------------------------------HOTEL CARD COMPONENT-------------------
                    --------------------- --> */}
                    <div class="htlsCntnr">

                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ----------------------------------------HOTEL CARD COMPONENT---------------------------------------- --> */}



                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 p-2" style={ {width:"675px"} }>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid rounded" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="card-head">
                                            <div class="htl-nme-lctn">
                                                <h5 class="card-title mb-0"><b>Mariners Bay</b></h5>
                                                <h6 class="card-title mb-0"><b>Sector-17, Noida</b></h6>
                                            </div>
                                            <div class="htl-rtng">
                                                <p class="rtng-text m-0">4.2</p>
                                            </div>
                                        </div>
                                        <div class="htls-dtls pt-2 mt-4">
                                            <p class="card-text mb-0">
                                                <ul class="dtls-wrapper">
                                                    <li class="dtls-span">2 Rooms</li>
                                                    <li class="dtls-span">Pool Available</li>
                                                    <li class="dtls-span">3 Meals Included</li>
                                                    <li class="dtls-span">Sea Side</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div class="htl-price-bkng">
                                            <div class="htl-price">
                                                <p class="card-text htl-slashd-price m-0">&#8377 1200</p>
                                                <p class="card-text htl-fnl-price m-0">&#8377 900</p>
                                                <p class="card-text htl-price-per-time m-0">per 24 Hrs</p>
                                            </div>
                                            <div class="htl-bkng">
                                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div class="restaurant tab-pane fade" id="restaurant-tab-pane" role="tabpanel" aria-labelledby="restaurant-tab" tabindex="0">

                    <h3 class="rstrntsTabHdng"><b>Great Restaurants near you.</b></h3>
                    
                    {/* <!-- ----------------------------------------RESTAURANT CARD COMPONENT---------------------------------------- --> */}
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        
                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <div class="restro">
                                        <h5 class="card-title mb-0"><b>Restro You Know.</b></h5>
                                        <p class="rtngs-text card-text">4.4</p>
                                    </div>
                                    <div class="restro-info">
                                        <p class="lctns-text card-text mt-2 mb-0">Netaji Subhash Place, New Delhi</p>
                                        <p class="ctgry-text card-text mt-2 mb-0" id="VegNonVegCtgry">Pure Veg</p>
                                    </div>
                                    <hr class="Restaurants-end-divider mt-0.5"/>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ----------------------------------------RESTAURANT CARD COMPONENT---------------------------------------- --> */}


                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <div class="restro">
                                        <h5 class="card-title mb-0"><b>Restro You Know.</b></h5>
                                        <p class="rtngs-text card-text">4.4</p>
                                    </div>    
                                    <div class="restro-info">
                                        <p class="lctns-text card-text mt-2 mb-0">Netaji Subhash Place, New Delhi</p>
                                        <p class="ctgry-text card-text mt-2 mb-0" id="VegNonVegCtgry">Veg/Non-Veg</p>
                                    </div>
                                    <hr class="Restaurants-end-divider mt-0.5"/>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <div class="restro">    
                                        <h5 class="card-title mb-0"><b>Restro You Know.</b></h5>
                                        <p class="rtngs-text card-text">4.4</p>
                                    </div>
                                    <div class="restro-info">
                                        <p class="lctns-text card-text mt-2 mb-0">Netaji Subhash Place, New Delhi</p>
                                        <p class="ctgry-text card-text mt-2 mb-0" id="VegNonVegCtgry">Veg/Non-Veg</p>
                                    </div>
                                    <hr class="Restaurants-end-divider mt-0.5"/>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <div class="restro">    
                                        <h5 class="card-title mb-0"><b>Restro You Know.</b></h5>
                                        <p class="rtngs-text card-text">4.4</p>
                                    </div>
                                    <div class="restro-info">
                                        <p class="lctns-text card-text mt-2 mb-0">Netaji Subhash Place, New Delhi</p>
                                        <p class="ctgry-text card-text mt-2 mb-0" id="VegNonVegCtgry">Non-Veg Only</p>
                                    </div>
                                    <hr class="Restaurants-end-divider mt-0.5"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="cafesAndLounges tab-pane fade" id="cafes-and-lounges-tab-pane" role="tabpanel" aria-labelledby="cafes-and-lounges-tab" tabindex="0">

                    <h3 class="cafesAndLoungesTabHdng"><b>Spend some quality time at these Cafes.</b></h3>
                    
                    {/* <!-- ----------------------------------------CAFE CARD COMPONENT---------------------------------------- --> */}
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        
                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                            <h5 class="card-title"><b>Cafe Unknown</b></h5>
                                            <p class="lctn-text card-text">Connaught Place, New Delhi</p>
                                    <div class="sub-info">
                                        <p class="price-text card-text mb-0">&#8377 1600 for 2 Persons</p>
                                        <p class="rtngs-text card-text">4.2</p>
                                    </div>
                                    <hr class="CafesAndLounges-end-divider"/>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ----------------------------------------CAFE CARD COMPONENT---------------------------------------- --> */}

                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                            <h5 class="card-title"><b>Cafe Unknown</b></h5>
                                            <p class="lctn-text card-text">Connaught Place, New Delhi</p>
                                    <div class="sub-info">
                                        <p class="price-text card-text mb-0">&#8377 1600 for 2 Persons</p>
                                        <p class="rtngs-text card-text">4.2</p>
                                    </div>
                                    <hr class="CafesAndLounges-end-divider"/>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                    <img src="https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                            <h5 class="card-title"><b>Cafe Unknown</b></h5>
                                            <p class="lctn-text card-text">Connaught Place, New Delhi</p>
                                    <div class="sub-info">
                                        <p class="price-text card-text mb-0">&#8377 1600 for 2 Persons</p>
                                        <p class="rtngs-text card-text">4.2</p>
                                    </div>
                                    <hr class="CafesAndLounges-end-divider"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="vacation tab-pane fade" id="vacation-tab-pane" role="tabpanel" aria-labelledby="vacation-tab" tabindex="0">

                    <h3 class="vacationTabHdng m-0"><b>Our most opted holiday packages.</b></h3>
                    
                    {/* <!-- ----------------------------------------VACATION CARD COMPONENT---------------------------------------- --> */}
                    <div class="card mb-3">
                            <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Wildlife_1200x320_22Aug.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body pt-1.5 pr-0.5 pb-1.5 pl-0.5">
                            <h4 class="card-title mt-1 mb-0"><b>Uttarakhand</b></h4>
                            <p class="card-text mt-2 mb-0"><b>Starting from &#8377 5,000 per Person only</b></p>
                        </div>
                        <div class="prmry-dtls">
                            <div class="lctns-dtls">
                                <button type="button" class="btn btn-outline-primary m-1">Ranthambore National Park</button>
                                <button type="button" class="btn btn-outline-primary m-1">Rishikesh</button>
                                <button type="button" class="btn btn-outline-primary m-1">Haridwar</button>
                                <button type="button" class="btn btn-outline-primary m-1">Jim Corbett National Park</button>
                            </div>
                            <div class="booking-optns">
                                <button type="button" class="btn btn-primary btn-sm">Explore More</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    {/* <!-- ----------------------------------------VACATION CARD COMPONENT---------------------------------------- --> */}


                    <div class="vctns-cntnr">
                        

                        <div class="card" style={{width:"18rem"}}>
                            <div class="card-body mr-1 ml-1">
                                <h4 class="card-title"><b>Best selling destinations!</b></h4>
                                <p class="card-text"><br/>Festive Travel Sale!<br/>Get flat 30% OFF! Use Code: FESTIVE30</p>
                            </div>
                        </div>

                        <div class="vacation-slider">
                            <div class="vacation-card-small">
                                
                    {/* <!-- ----------------------------------------VACATION MINI CARD COMPONENT---------------------------------------- --> */}
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1257/1200x658_Kumarakom2.jpg?crop=137:155&downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Kerala</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                    {/* <!-- ----------------------------------------VACATION MINI CARD COMPONENT---------------------------------------- --> */}

                            </div>
                        
                            <div class="vacation-card-small">
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Stunning%20Sinquerim%20Beach.jpg?crop=137:155&amp;downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Goa</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="vacation-card-small">
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=137:155&downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Kashmir</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                            </div>
                        
                            <div class="vacation-card-small">
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1325/Udaipur-Heritage.jpg?crop=137:155&downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Rajasthan</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="vacation-card-small">
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3872/couple%20walk%20on%20havelock.jpg?crop=137:155&downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Andaman</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="vacation-card-small">
                                <div class="card" style={{width:"200px"}}>
                                        <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4194/Explore%20the%20offbeat%20Kinnaur%20region.jpg?crop=137:155&downsize=137:155" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Himachal</h5>
                                        <p class="card-text">Starting at &#8377 20,000 Per person</p>
                                        {/* <a href="#" class="btn btn-primary" style="font-family: 'Josefin Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Explore More</a> */}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>

                </div>

                <div class="tripPlanner tab-pane fade" id="trip-planner-tab-pane" role="tabpanel" aria-labelledby="trip-planner-tab" tabindex="0">Atlantis, under the sea. Under the sea. Where are you now ? Another dream, the monster's running wild inside of me. I'm faded.

                </div>

                <div class="tab-pane fade" id="nearby-activities-tab-pane" role="tabpanel" aria-labelledby="nearby-activities-tab" tabindex="0">Atlantis, under the sea. Under the sea. Where are you now ? Another dream, the monster's running wild inside of me. I'm faded.

                </div>

            </div>
        </div>

        <div class="prllx-cntnr">
            <div class="prllx-cntnt">
                <h3 class="card-title">You need to go places & Tripeazium will help you.</h3>
            </div>
        </div>

        <div class="abtContainer" id="abtCntainr">

            <div class="accordion" id="accordionExample">
                        {/* <!-- ----------------------------------------INFO TAB COMPONENT---------------------------------------- --> */}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Tripeazium about ?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Tripeazium, established in 2022 is a travel agency which aims at providing it's customers the best travel experience they can ever have with in budget offers and providing our assistance to them from the very start of their journey till the very end. Highly focused on our customer's demand we make sure that our customers always remain happy from our assistance. Be it vacations, holiday pakages, booking restaurants or hotels, we provide our customers the best offers in the market apart from everyone else. We look forward to have you as a part of Tripeazium's family.</p>
                        </div>
                    </div>
                </div>
                        {/* <!-- ----------------------------------------INFO TAB COMPONENT---------------------------------------- --> */}

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Why travel by Tripeazium ?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Established in 2022, Tripeazium is a travel and tourism agency which aims at giving the travellers the best experience they can ever have from providing best holiday packages to best the restaurants and cafes in town. We provide you with the best sight seeings and nearby getaways in the town and anywhere you want. The experience of booking your hotel stays, restaurants, cafes, lounges and holiday packages through our desktop site or mobile app can be done with complete ease and totaly hassle free.</p>
                        </div>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            What makes us different from others ?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Tripeazium offers you all kind of travelling solutions fom having a vacation to browsing some nearby popular locations in the town. Apart from this we also help you in planning your trip priorly which gives you the best experience of travelling and saves your time in deciding or browsing for where to go. You can either plan your trip by yourself or you just rely on us, we are there to assist you in any form. Just take a look and you will know where you planned to go next. We are always there to assist you from the point you step out of your house till the time you step back into your house.</p>
                        </div>
                    </div>
                </div>

            </div>

                        {/* <!-- ----------------------------------------TEAM TAB COMPONENT---------------------------------------- --> */}
            <h3 class="team-hdng pt-4 pb-2">Meet Our Team
            </h3>
        
                <div class="cntnr-team row row-cols-1 row-cols-md-3 g-4">

                    <img src="/images/About Team.jpeg" class="cmpny-team-img" alt="Tripeazium's Team Image"/>
                    <p class="trpzm-quote">We believe in providing a memorable trip and a great one.</p>

                </div>
                        {/* <!-- ----------------------------------------TEAM TAB COMPONENT---------------------------------------- --> */}

                <hr/>

                            {/* <!-- ----------------------------------------FOOTER COMPONENT---------------------------------------- --> */}
                <div class="container-footer">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center pb-3 mb-3">
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                        </ul>
                        
                        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <div class="footer-content">
                                <p class="mb-0">&copy; 2022 Company, Incorporation.</p>
                                <p class="mb-2">All rights reserved.</p>
                            </div>
                                <div class="social-icons">
                                    <a class="link-dark" href="#"><img src="/icons/Instagram.png" alt="" width="30.5rem"/></a>
                                    <a class="link-dark" href="#"><img src="/icons/LinkedIn.png" alt="" width="32.5rem"/></a>
                                </div>
                        </div>
                    </footer>
                </div>
                            {/* <!-- ----------------------------------------FOOTER COMPONENT---------------------------------------- --> */}


        </div>
    </>

    
  );
}

export default App;
