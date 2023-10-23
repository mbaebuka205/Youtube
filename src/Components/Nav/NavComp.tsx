import NavProps from "./NavProp";
import styled from "styled-components";
import { SearchVideo } from "../../api/Api";

const NavComp = () =>{
    return(
        <div>
            <Container>
                <NavProps onClick={()=>{
                    SearchVideo("All")
                }} bg="i" text="All"/>
                <NavProps onClick={()=>{
                    SearchVideo("News")
                }} bg="" text="News"/>
                <NavProps onClick={()=>{
                    SearchVideo("Music")
                }} bg="" text="Music"/>
                <NavProps onClick={()=>{
                    SearchVideo("Debate")
                }} bg="" text="Debate"/>
                <NavProps onClick={()=>{
                    SearchVideo("Fashion")
                }} bg="" text="Fashion"/>
                <NavProps onClick={()=>{
                    SearchVideo("Technology")
                }} bg="" text="Technology"/>
                <NavProps onClick={()=>{
                    SearchVideo("Entertainment")
                }} bg="" text="Entertainment"/>
                <NavProps onClick={()=>{
                    SearchVideo("Programming")
                }} bg="" text="Programming"/>
            </Container>
        </div>
    )
}
export default NavComp;
const Container = styled.div`
    height: 60px;
    width: 93%;
    display: flex;
    align-items: center;
`