import React from 'react'

const HotelCard = () => {
  return (
    <>
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
                                                <p class="card-text htl-slashd-price m-0"> ₹ 1200</p>
                                                <p class="card-text htl-fnl-price m-0">₹ 900</p>
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
    </>
  )
}

export default HotelCard;