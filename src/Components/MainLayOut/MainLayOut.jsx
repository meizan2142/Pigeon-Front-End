import { Outlet } from "react-router"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const MainLayOut = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default MainLayOut