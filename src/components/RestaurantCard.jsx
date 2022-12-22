import React from "react";

const RestaurantCard = () => {
  return (
    <>
      <div class="col">
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="restro">
              <h5 class="card-title mb-0">
                <b>Restro You Know.</b>
              </h5>
              <p class="rtngs-text card-text">4.4</p>
            </div>
            <div class="restro-info">
              <p class="lctns-text card-text mt-2 mb-0">
                Netaji Subhash Place, New Delhi
              </p>
              <p class="ctgry-text card-text mt-2 mb-0" id="VegNonVegCtgry">
                Pure Veg
              </p>
            </div>
            <hr class="Restaurants-end-divider mt-0.5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
