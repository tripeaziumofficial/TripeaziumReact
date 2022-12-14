import React from 'react'

const CafeCard = () => {
  return (
    <>
    <div class="col">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <b>Cafe Unknown</b>
                    </h5>
                    <p class="lctn-text card-text">
                      Connaught Place, New Delhi
                    </p>
                    <div class="sub-info">
                      <p class="price-text card-text mb-0">
                        ₹ 1600 for 2 Persons
                      </p>
                      <p class="rtngs-text card-text">4.2</p>
                    </div>
                    <hr class="CafesAndLounges-end-divider" />
                  </div>
                </div>
              </div>
    </>
  )
}

export default CafeCard;