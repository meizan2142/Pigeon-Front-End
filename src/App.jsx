import AllFacilities from "./Components/AllFacilites/AllFacilities";
import Footer from "./Components/Footer/Footer";
// import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MissionVisionSection from "./Components/MissionVisionSection/MissionVisionSection";
import Nav from "./Components/Nav/Nav";
import RecentRaces from "./Components/RecentRaces/RecentRaces";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <MissionVisionSection/>
      </div>
      <div>
        <AllFacilities/>
      </div>
      <div>
        <RecentRaces/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
