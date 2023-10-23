import styled from "styled-components";
import React from 'react'

interface iProps{
    text?:string,
    bg:string,
    onClick:any,

}

const NavProps:React.FC<iProps> = ({text, bg, onClick}:iProps) =>{
   return(
     <div>
        <Container bg={bg} onClick={onClick}>
          <Txt bg={bg}>{text}</Txt>
        </Container>
     </div>
   )
}
export default NavProps;
const Txt = styled.div<{bg:string}>`
    font-size: 13px;
    color: ${({bg})=> (bg? "white" : "black")};
`
const Container = styled.div<{bg:string}>`
    padding: 5px 12px;
    background-color:${({bg})=>(bg? "black" : "#E5E5E5")} ;
    border-radius: 7px;
    margin: 8px;

`