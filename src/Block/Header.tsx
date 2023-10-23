
import styled from "styled-components";
import {TbSearch} from 'react-icons/tb'
import {BiVideoPlus} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaMicrophone} from 'react-icons/fa'
import pix from '../assets/YouTube-Logo.wine.png'
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () =>{
    const [change, setChange] = useState(false)
    const toggle = () =>{
        setChange(!change)
    }
    return(
        <div>
           <Container>
             <Wrapper>
                <Left>
                    <Icon onClick={toggle}>{change?(<h2>x</h2>):(<AiOutlineMenu/>)}</Icon>
                    <L to="/"><Logo src={pix}/></L>
                    {change?(<Menu></Menu>):(null)}
                </Left>
                <Middle>
                    <Istf>
                       <Input type="text" placeholder="search"/>
                       <Search>
                       <TbSearch/>
                       </Search>
                    </Istf>
                    <Micro><FaMicrophone/></Micro>
                </Middle>
                <Right>
                    <Dplus><BiVideoPlus/></Dplus>
                    <Dbell><BsBell/></Dbell>
                    <Letter>E</Letter>
                </Right>
             </Wrapper>
           </Container>
        </div>
    )
}
export default Header;
const Menu = styled.div`
    position: absolute;
    top: 40px;
    height:500px;
    width: 200px;
    background-color: blue;
    z-index: 1;
`
const L = styled(Link)` 
    text-decoration:none ;
`
const Letter = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: blue;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Dbell = styled.div`
    font-size: 18px;
`
const Dplus = styled.div`
    font-size: 18px;
`
const Search = styled.div`
    height: 40px;
    width:11%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid silver;
    border-bottom: 1px solid silver;
    border-top: 1px solid silver;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 22px;
    background-color: #F8F8F8;
    &:hover{
        background-color: #D9D9D9;
    }
`
const Input = styled.input`
    border: 1px solid silver;
    outline: none;
    height: 38px;
    width: 70%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 10px;
    flex: 1;
    &::placeholder{
        font-family: Poppins;
        
    }
`
const Micro = styled.div`
    height: 42px;
    width: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    &:hover{
        background-color: #D9D9D9;
    }
`
const Istf = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
    width: 80%;
`
const Icon = styled.div`
    width:20%;
    font-size: 22px;
`
const Right = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Middle = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Left = styled.div`
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled.div`
    width:96%;
    /* background-color: cyan; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Container = styled.div`
    height: 60px;
    width: 100%;
    position: relative;
    /* background-color: purple; */
    display: flex;
    justify-content: center;
    align-items: center;
`