import React from 'react'

const ServicesGrid = ({TypeHandler}) => {
  return (
    <>
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button onClick={()=>TypeHandler("Hotel")} class="nav-link active" id="hotel-tab" data-bs-toggle="tab" data-bs-target="#hotel-tab-pane" type="button" role="tab" aria-controls="hotel-tab-pane" aria-selected="true">
                        <img src="icons/Hotel-Icon.png" alt="Hotels" width="30rem"/>Hotels</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button onClick={()=>TypeHandler("Restaurant")} class="nav-link" id="restaurant-tab" data-bs-toggle="tab" data-bs-target="#restaurant-tab-pane" type="button" role="tab" aria-controls="restaurant-tab-pane" aria-selected="false"><img src="icons/Restaurant-Icon.png" alt="Restaurants" width="30rem"/>Restaurants</button>
                </li>
                <li  onClick={()=>TypeHandler("Cafe")} class="nav-item" role="presentation">
                    <button class="nav-link" id="cafes-and-lounges-tab" data-bs-toggle="tab" data-bs-target="#cafes-and-lounges-tab-pane" type="button" role="tab" aria-controls="cafes-and-lounges-tab-pane" aria-selected="false"><img src="icons/Cafes-&-Lounges-Icon.png" alt="Cafes & Lounges" width="30rem"/>Cafés & Lounges</button>
                </li>
                <li  class="nav-item" role="presentation">
                    <button  onClick={()=>TypeHandler("Vacations")} class="nav-link" id="vacation-tab" data-bs-toggle="tab" data-bs-target="#vacation-tab-pane" type="button" role="tab" aria-controls="vacation-tab-pane" aria-selected="false"><img src="icons/Vacation-Icon.png" alt="icons/Vacation" width="30rem"/>Vacation</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button onClick={()=>TypeHandler("trip")} class="nav-link" id="trip-planner-tab" data-bs-toggle="tab" data-bs-target="#trip-planner-tab-pane" type="button" role="tab" aria-controls="trip-planner-tab-pane" aria-selected="false"><img src="icons/Trip-Planner-Icon.png" alt="Trip Planner" width="30rem"/>Trip Planner</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" onClick={()=>TypeHandler("nearby")} id="nearby-activities-tab" data-bs-toggle="tab" data-bs-target="#nearby-activities-tab-pane" type="button" role="tab" aria-controls="nearby-activities-tab-pane" aria-selected="false"><img src="icons/Activities-Icon.png" alt="Nearby Activities" width="30rem"/>Nearby Activities</button>
                </li>
            </ul>

    
    

    
    </>
  )
}

export default ServicesGrid;