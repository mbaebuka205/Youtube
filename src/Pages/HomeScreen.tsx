import styled from "styled-components";
import NavComp from "../Components/Nav/NavComp";
import HomeVidDis from "../Components/HomeVid/HomeVidDis";

const HomeScreen = () =>{
    return(
        <div>
          <Container>
           <Top>
            <NavComp/>
           </Top>
           <Bottom>
             <HomeVidDis/>
           </Bottom>
          </Container>
        </div>
    )
}
export default HomeScreen;

const Bottom = styled.div`
    margin-top: 60px;
    height: calc(100% - 60px);
    width: 100%;
    /* background-color: orange; */
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    `
const Top = styled.div`
    height: 60px;
    width: 100%;
    background-color: aliceblue;
    position: fixed;
    `
const Container = styled.div`
    height: 100%;
    width: calc(100vw - 80px);
    overflow-y: auto;
    /* background-color: purple; */
`