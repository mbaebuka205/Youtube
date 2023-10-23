import {AiFillHome} from 'react-icons/ai'
import {SiShortcut} from 'react-icons/si'
import {MdOutlineSubscriptions, MdVideoLibrary} from 'react-icons/md'

import styled from "styled-components";

const SideBar = () =>{
    return(
        <div>
          <Container>
            <Wrapper>
               <Divs>
                <Icon>
                 <AiFillHome/>
                </Icon>
                <span>Home</span>
                </Divs>
               <Divs>
                <Icon>
                 <SiShortcut/>
                </Icon>
                <span>Shorts</span>
               </Divs>
               <Divs>
                <Icon>
                  <MdOutlineSubscriptions/>
                </Icon>
                <span>Subscription</span>
               </Divs>
               <Divs>
                <Icon>
                  <MdVideoLibrary/> 
                </Icon>
                <span>Library</span>
               </Divs>
            </Wrapper>
          </Container>
        </div>
    )
}
export default SideBar;
const Icon = styled.div`
    font-size: 20px;
`
const Divs = styled.div` 
    height: 55px;
    border-radius: 7px;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      font-size: 10px;
      font-weight: bolder;
    };
    &:hover{
      background-color: #F8F8F8;
    }

`

const Wrapper = styled.div`
    width: 90%;
    height:300px;
    /* background-color: purple; */
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Container = styled.div`
    height:calc(100vh - 86px);
    width:80px;
    /* background-color: pink; */
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`