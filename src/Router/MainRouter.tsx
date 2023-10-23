import { createBrowserRouter } from "react-router-dom";
import Layout from "../Common/Layout";
import DetailVidDis from "../Components/DetailVid/DetailVidDis";
import Layout2 from "../Common/Layout2";

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
         {
            index:false,
            element:<Layout2/>
         }
        
         
    ]
    },
    {
        path:"/detailed-page",
        element:<Layout2/>
     }
])