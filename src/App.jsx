import Hero from "./Components/Hero/Hero";
import MissionVisionSection from "./Components/MissionVisionSection/MissionVisionSection";
import Nav from "./Components/Nav/Nav";

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
    </div>
  )
}

export default App
