import { createBrowserRouter } from "react-router";
import UpComingRaces from "../Pages/UpComingRaces/UpComingRaces";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/upcomingraces',
                element: <UpComingRaces />
            },
        ]
    }
]);
export default router;