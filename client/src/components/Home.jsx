import React, { useState } from "react";
import "../App.css";
import BGVideo from "./BGVideo";
import Heading from "./Heading";
import ServicesGrid from "./ServiceGrid";
import Navbar from "./Navbar";
import HotelCard from "./HotelCard";
import RestaurantCard from "./RestaurantCard";
import CafeCard from "./CafeCard";
import MainVacation from "./MainVacation";
import MiniVacation from "./MiniVacation";
import InfoContainer from "./InfoContainer";
import TeamTab from "./TeamTab";
import Footer from "./Footer";
import Map from "./Map";

const Home = () => {
    // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("")
  const [RCLMap,setRCLMap]=useState([{
    Id:0,
    Name: '',
    latitude:0,
    longitude: 0,
    type: '',
    targettingCollege: ''
}])
const [collegeMap,setCollegeMap]=useState({
  Id: 1,
  Name: 'Bhagwan Parshuram Institute of Technology, Rohini',
  latitude: 28.73674982409112,
  longitude: 77.11295999133753
}) 
const CollegeArray=[
  {
    Id: 1,
    Name: 'Bhagwan Parshuram Institute of Technology, Rohini',
    latitude: 28.73674982409112,
    longitude: 77.11295999133753
  },
  {
    Id: 2,
    Name: 'Bhartiya Vidyapeeth College of Engineering, Paschim Vihar',
    latitude: 28.67615176356619,
    longitude: 77.11384592496472
  },
  {
    Id: 3,
    Name: 'Gitarattan Institute of Advanced Studies, Rohini',
    latitude: 28.71205328570887,
    longitude: 77.11951232017336
  },
  {
    Id: 4,
    Name: 'Maharajan Agrasen Institute of Technology, Rohini',
    latitude: 28.718550146116243,
    longitude: 77.06659097784667
  },
  {Id: 5,
    Name: 'Keshav Mahavidyalya, PitamPura',
    latitude: 28.687770182396093,
    longitude: 77.12017259554796
  },
  {Id: 6,
    Name: 'Maharaja Surajmal Institute of Technology, JanakPuri',
    latitude: 28.620911611309268,
    longitude: 77.09324843130545
  }
]
const RestCafeLounge = [
  {
    Id:1,
    Name: 'Nine Dragon',
    latitude:28.71630722192371,
    longitude: 77.12026457477475,
    type: 'Cafe',
    targettingCollege: "Bhagwan Parshuram Institute of Technology, Rohini"
  },
  {
    Id:2,
    Name: 'The Crispy Bites',
    latitude:28.736272067372607,
    longitude: 77.1135827015149,
    type: 'Cafe',
    targettingCollege: "Bhagwan Parshuram Institute of Technology, Rohini"
  },
  {
    Id:3,
    Name: 'Café Maddox',
    latitude:28.677296337476996,
    longitude: 77.11185506400025,
    type: 'Cafe',
    targettingCollege: "Bhartiya Vidyapeeth College of Engineering, Paschim Vihar"
  },
  {
    Id:4,
    Name: 'American Daddy',
    latitude:28.669826592703767,
    longitude: 77.10928796965945,
    type: 'Cafe',
    targettingCollege: "Bhartiya Vidyapeeth College of Engineering, Paschim Vihar"
  },
  {
    Id:5,
    Name: 'The Burger Club',
    latitude:28.71630722192371,
    longitude: 77.12026457477475,
    type: 'Cafe',
    targettingCollege: "Gitarattan Institute of Advanced Studies, Rohini"
  },
  {
    Id:6,
    Name: 'The Crispy Bites',
    latitude:28.68851350595149,
    longitude: 77.12130502211548,
    type: 'Cafe',
    targettingCollege: "Keshav Mahavidyalya, PitamPura"
  },
  {
    Id:7,
    Name: 'Food G',
    latitude:28.618775672565352,
    longitude: 77.09288584277203,
    type: 'Cafe',
    targettingCollege: "Maharaja Surajmal Institute of Technology, JanakPuri"
  },
  {
    Id:8,
    Name: 'Two Pots Kitchen',
    latitude:28.71630722192371,
    longitude: 77.12026457477475,
    type: 'Cafe',
    targettingCollege: 'Maharaja Surajmal Institute of Technology, Janakpuri'
  },
]
const changeCollege=(college)=>{
  if(college!==''){
    const collegeforMap=CollegeArray.find((collegeGet)=>collegeGet.Name===college)
    setCollegeMap(collegeforMap)    
  }
}
const getData=(data)=>{
  // setType(prev=>{
  //   prev=''
  //   return data
  // })
  const RCL= RestCafeLounge.filter((Type)=>Type.type===data)
  setRCLMap(prev=>{
    prev=null
    return RCL})
}
  return (
    <>
      <Navbar />
      <BGVideo />

      <Heading />
      <br />
      <div class="btn-group dropdown collgDropDown">
        <button class="btn btn-secondary btn-lg dropdown-toggle dropDownClick" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Which College Do You Want To Search ?
        </button>
        <ul class="dropdown-menu dropdown-menu-dark dropDownList">
          <li  >
          <a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Bhagwan Parshuram Institute of Technology, Rohini")}
           >Bhagwan Parshuram Institute of Technology, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Bhartiya Vidyapeeth College of Engineering, Paschim Vihar")}
          >Bhartiya Vidyapeeth College of Engineering, Paschim Vihar</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Gitarattan Institute of Advanced Studies, Rohini")}
           >Gitarattan Institute of Advanced Studies, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Maharajan Agrasen Institute of Technology, Rohini")}
          >Maharajan Agrasen Institute of Technology, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Keshav Mahavidyalya, PitamPura")}
          >Keshav Mahavidyalya, PitamPura</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>changeCollege("Maharaja Surajmal Institute of Technology, JanakPuri")}
          >Maharaja Surajmal Institute of Technology, JanakPuri</a></li>
          {/* <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>setCollege("Dr. Akhilesh Das Gupta Institute of Technology & Management, Shastri Park")}
          >Dr. Akhilesh Das Gupta Institute of Technology & Management, Shastri Park</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>setCollege("Maharaja Surajmal Institute of Technology, JanakPuri")}
          >Maharaja Surajmal Institute of Technology, JanakPuri</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>setCollege("Rukmini Devi Institute of Advanced Studies, Rohini")}
          >Rukmini Devi Institute of Advanced Studies, Rohini</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>setCollege("Vivekananda Institute of Professional Studies, PitamPura")}
          >Vivekananda Institute of Professional Studies, PitamPura</a></li>
          <li><a class="dropdown-item dropDownCollgName"
           href="#1"
           onClick={()=>setCollege("Guru Tegh Bahadur Institute of Technology, Rajouri Garden")}
          >Guru Tegh Bahadur Institute of Technology, Rajouri Garden</a></li> */}
        </ul>
      </div>

      {collegeMap.Id&&(
        <Map college={collegeMap} types={RCLMap}/>
      )}
      <div class="srvcsContainer" id="srvcsCntainr">
        <ServicesGrid TypeHandler={getData}/>

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
  )
}

export default Home