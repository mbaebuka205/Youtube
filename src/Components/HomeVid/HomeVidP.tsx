import styled from "styled-components";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import moment from "moment";

interface iData{
    src?:string,
    img?:string,
    h1?:string,
    span?:string,
    span1?:string
}

const HomeVidP:React.FC<iData> = ({src, img, h1, span, span1}:iData) =>{

   
    return(
        <div>
          <Container >
           <Wrapper>
                 <Vid src={src}/>
                  <ImgTxt>
                     <Img src={img}/>
                     <Txt>
                      <span style={{fontSize:"19px"}}>{h1}</span>
                      <Space/>
                      <span>{span}</span>
                      <Space/>
                      <span>{span1}</span>
                     </Txt>
                     <Vhold to="./detailed-page">
                     </Vhold>
                  </ImgTxt>     
           </Wrapper>
         
          </Container>
        </div>
    )
}
export default HomeVidP;
const Vhold = styled(Link)`
   height: 20px;
   width: 20px;
   /* background-color: greenyellow; */
   position: absolute;
   bottom: 89.5px;
   right: 21.5px;
   /* background-color:transparent */
`
const Space = styled.div`
   margin: 3px;
`
const Txt = styled.div`
    width: 82%;
    /* background-color: aliceblue; */
`
const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: purple;
    margin: 5px;

`
const ImgTxt = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* background-color: pink; */
`
const Vid = styled.iframe`
    height: 200px;
    width: 100%;
    background-color:black;
    border-radius: 10px;
`
const Wrapper = styled.div`
    text-decoration: none;
    color: black;
`
const Container = styled.div`
    height: 280px;
    width: 400px;
    /* background-color: darkslategray; */
    margin-top: 10px ;
    margin-left: 17px;
    margin-bottom: 25px;
    position: relative;
`