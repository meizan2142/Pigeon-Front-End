import AllFacilities from "../../Components/AllFacilites/AllFacilities"
import Hero from "../../Components/Hero/Hero"
import MissionVisionSection from "../../Components/MissionVisionSection/MissionVisionSection"
// import RecentRaces from "./Components/RecentRaces/RecentRaces";

const Home = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div>
                <MissionVisionSection />
            </div>
            <div>
                <AllFacilities />
            </div>
            {/* <div>
                <RecentRaces />
            </div> */}
        </div>
    )
}

export default Home