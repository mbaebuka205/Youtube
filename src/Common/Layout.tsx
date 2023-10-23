import Header from "../Block/Header";
import styled from "styled-components";
import {Outlet} from "react-router-dom"
import HomeScreen from "../Pages/HomeScreen";
import SideBar from "../Pages/SideBar";

const Layout = () =>{
    return(
        <div>
          <H>  <Header/></H>
          <Outlet/>
          <Hold>
          <Div>  <SideBar/></Div>
          <HomeScreen/>
          </Hold>
          
        </div>
    )
}
export default Layout;
const H = styled.div`
    /* margin-bottom: 70px; */
`
const Div = styled.div`
    margin-right: 80px;
`
const Hold = styled.div`
display:flex;
width:100%;
position: relative;
height:calc(100vh - 76px);
/* background-color: blue; */
overflow: hidden;
`