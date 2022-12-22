import React from 'react'

const MainVacation = () => {
  return (
    <>
    <div class="card mb-3">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Wildlife_1200x320_22Aug.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1.5 pr-0.5 pb-1.5 pl-0.5">
                <h4 class="card-title mt-1 mb-0">
                  <b>Uttarakhand</b>
                </h4>
                <p class="card-text mt-2 mb-0">
                  <b>Starting from &#8377 5,000 per Person only</b>
                </p>
              </div>
              <div class="prmry-dtls">
                <div class="lctns-dtls">
                  <button type="button" class="btn btn-outline-primary m-1">
                    Ranthambore National Park
                  </button>
                  <button type="button" class="btn btn-outline-primary m-1">
                    Rishikesh
                  </button>
                  <button type="button" class="btn btn-outline-primary m-1">
                    Haridwar
                  </button>
                  <button type="button" class="btn btn-outline-primary m-1">
                    Jim Corbett National Park
                  </button>
                </div>
                <div class="booking-optns">
                  <button type="button" class="btn btn-primary btn-sm">
                    Explore More
                  </button>
                </div>
              </div>
              <hr />
            </div>
    </>
  )
}

export default MainVacation;