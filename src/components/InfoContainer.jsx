import React from "react";

const InfoContainer = () => {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What is Tripeazium about ?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Tripeazium, established in 2022 is a travel agency which aims at
              providing it's customers the best travel experience they can ever
              have with in budget offers and providing our assistance to them
              from the very start of their journey till the very end. Highly
              focused on our customer's demand we make sure that our customers
              always remain happy from our assistance. Be it vacations, holiday
              pakages, booking restaurants or hotels, we provide our customers
              the best offers in the market apart from everyone else. We look
              forward to have you as a part of Tripeazium's family.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContainer;
