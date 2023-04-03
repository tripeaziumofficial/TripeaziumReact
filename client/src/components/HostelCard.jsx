import React from 'react'

const HostelCard = ({ pg }) => {
  return (
    <>
        <div class="card mb-3 p-2" style={ {width:"675px"} }>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={pg.image_url!=='null'?pg.image_url:"https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} class="img-fluid rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="card-head">
                            <div class="htl-nme-lctn">
                                <h6 class="card-text">
                                    {/* <b> */}
                                        {pg.name} 
                                    {/* </b> */}
                                </h6>
                                <h6 class="card-text mb-0">{pg?.address}</h6>
                            </div>
                            <div class="htl-rtng">
                                <p class="rtng-text m-0">{pg?.ratings}</p>
                            </div>
                        </div>
                        <div class="htls-dtls pt-2 mt-4">
                            <p class="card-text mb-0">
                                <ul class="dtls-wrapper">
                                    <li class="dtls-span">Contact no - {pg?.contact}</li>
                                    {/* <li class="dtls-span">Pool Available</li>
                                    <li class="dtls-span">3 Meals Included</li>
                                    <li class="dtls-span">Sea Side</li> */}
                                </ul>
                            </p>
                        </div>
                        <hr/>
                        <div class="htl-price-bkng">
                            <div class="htl-price">
                                {/* <p class="card-text htl-slashd-price m-0"> ₹ 1200</p> */}
                                <p class="card-text htl-fnl-price m-0">₹ {pg?.pricing}</p>
                                {/* <p class="card-text htl-price-per-time m-0">per 24 Hrs</p> */}
                            </div>
                            {/* <div class="htl-bkng">
                                <button type="button" class="btn btn-primary btn-sm">More Details</button>
                                <button type="button" class="btn btn-primary btn-sm">Book Now</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HostelCard;