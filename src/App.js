import React, { useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Heading from "./components/Heading";
import ServicesGrid from "./components/ServiceGrid";
import Navbar from "./components/Navbar";
import HotelCard from "./components/HotelCard";
import RestaurantCard from "./components/RestaurantCard";
import CafeCard from "./components/CafeCard";
import MainVacation from "./components/MainVacation";
import MiniVacation from "./components/MiniVacation";
import InfoContainer from "./components/InfoContainer";
import TeamTab from "./components/TeamTab";
import Footer from "./components/Footer";

function App() {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // React.useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // }, []);
  return (
    <>
      <Navbar />

      <BGVideo />

      <Heading />
      <br />
      <div class="btn-group dropdown collgDropDown">
        <button class="btn btn-secondary btn-lg dropdown-toggle dropDownClick" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Which College Are You From ?
        </button>
        <ul class="dropdown-menu dropdown-menu-dark dropDownList">
          <li><a class="dropdown-item dropDownCollgName" href="#1">Bhagwan Parshuram Institute of Technology, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Bhartiya Vidyapeeth College of Engineering, Paschim Vihar</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Gitarattan Institute of Advanced Studies, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Maharajan Agrasen Institute of Technology, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Keshav Mahavidyalya, PitamPura</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Dr. Akhilesh Das Gupta Institute of Technology & Management, Shastri Park</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Maharaja Surajmal Institute of Technology, JanakPuri</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Rukmini Devi Institute of Advanced Studies, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Vivekananda Institute of Professional Studies, PitamPura</a></li>
          <li><a class="dropdown-item dropDownCollgName" href="#1">Guru Tegh Bahadur Institute of Technology, Rajouri Garden</a></li>

        </ul>
      </div>

      <div class="srvcsContainer" id="srvcsCntainr">
        <ServicesGrid />

        <div class="tab-content" id="myTabContent">
          <div
            class="hotel tab-pane fade show active"
            id="hotel-tab-pane"
            role="tabpanel"
            aria-labelledby="hotel-tab"
            tabindex="0"
          >
            <h3 class="htlsTabHdng">
              <b>Best Hotels in the City</b>
            </h3>
            <div class="htlsCntnr">
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />
            </div>
          </div>

          <div
            class="restaurant tab-pane fade"
            id="restaurant-tab-pane"
            role="tabpanel"
            aria-labelledby="restaurant-tab"
            tabindex="0"
          >
            <h3 class="rstrntsTabHdng">
              <b>Great Restaurants near you.</b>
            </h3>

            <div class="row row-cols-1 row-cols-md-2 g-4">
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />

            </div>
          </div>

          <div
            class="cafesAndLounges tab-pane fade"
            id="cafes-and-lounges-tab-pane"
            role="tabpanel"
            aria-labelledby="cafes-and-lounges-tab"
            tabindex="0"
          >
            <h3 class="cafesAndLoungesTabHdng">
              <b>Spend some quality time at these Cafes.</b>
            </h3>

            <div class="row row-cols-1 row-cols-md-3 g-4">
              <CafeCard />
              <CafeCard />
              <CafeCard />
            </div>
          </div>

          <div
            class="vacation tab-pane fade"
            id="vacation-tab-pane"
            role="tabpanel"
            aria-labelledby="vacation-tab"
            tabindex="0"
          >
            <h3 class="vacationTabHdng m-0">
              <b>Our most opted holiday packages.</b>
            </h3>

            <MainVacation />

            <div class="vctns-cntnr">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body mr-1 ml-1">
                  <h4 class="card-title">
                    <b>Best selling destinations!</b>
                  </h4>
                  <p class="card-text">
                    <br />
                    Festive Travel Sale!
                    <br />
                    Get flat 30% OFF! Use Code: FESTIVE30
                  </p>
                </div>
              </div>

              <div class="vacation-slider">
                <MiniVacation />
                <MiniVacation />
                <MiniVacation />
                <MiniVacation />
                <MiniVacation />
                <MiniVacation />
              </div>
            </div>
          </div>

          <div
            class="tripPlanner tab-pane fade"
            id="trip-planner-tab-pane"
            role="tabpanel"
            aria-labelledby="trip-planner-tab"
            tabindex="0"
          >
            Atlantis, under the sea. Under the sea. Where are you now ? Another
            dream, the monster's running wild inside of me. I'm faded.
          </div>

          <div
            class="tab-pane fade"
            id="nearby-activities-tab-pane"
            role="tabpanel"
            aria-labelledby="nearby-activities-tab"
            tabindex="0"
          >
            Atlantis, under the sea. Under the sea. Where are you now ? Another
            dream, the monster's running wild inside of me. I'm faded.
          </div>
        </div>
      </div>

      <div class="abtContainer" id="abtCntainr">
        <div class="accordion" id="accordionExample">
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </div>

        <TeamTab />

        <hr />

        <Footer />
      </div>
    </>
  );
}

export default App;
