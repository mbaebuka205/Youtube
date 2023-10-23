import styled from "styled-components";
import React,{useState} from 'react';
import {LiaThumbsUp, LiaThumbsDown} from 'react-icons/lia'

interface Iinfo{
    src?:string,
    h1?:string,
    p?:string,

}
const DetailVid:React.FC<Iinfo> = ({src, h1, p}) =>{
    
  const [change, setChange] = useState(false)
  const set:any = ()=>{
    setChange(!change)
  }
  

    return(
        <div>
          <Container>
            <Wrapper>
              <Top src={src}/>
              <Down>
                <Commt>
                   <span>{h1}</span><br/>
                  <Adiv>
                    <Left>
                      <Img/>
                      <Txt> 
                       <span>{p}</span>
                        <Space/>
                       <span>150Ksubscribers</span>
                      </Txt>
                     <Hold onClick={set}>{change? (<Sub>Subscribe</Sub>):(<Sub>UNSubscribe</Sub>)  } </Hold>
                    </Left>
                    <Right>
                     <Frst>
                       <Tmbup><LiaThumbsUp/></Tmbup>
                       <p>218k</p>
                       <Line/>
                       <Tmbdwn><LiaThumbsDown/></Tmbdwn>  
                     </Frst>
                    </Right>  
                  </Adiv>  
                </Commt>
                <Others></Others>
              </Down>
            </Wrapper>
          </Container>
        </div>
    )
}
export default DetailVid;
const Tmbdwn = styled.div`
  font-size:25px;
  margin-top: 7px;
`
const Line = styled.div`
  height: 72%;
  width: 1px;
  background-color: silver;
  margin-left: 10px;

`
const Tmbup = styled.div`
  font-size:25px;
  margin-top: 7px;
`
const Frst = styled.div`
  width: 130px;
  height:35px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  border-radius: 17px;
`
const Hold = styled.div``
const Txt = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  background-color: purple;
`
const Space = styled.div``
const Sub = styled.div`
  padding: 8px 9px;
  font-weight: bolder;
  color: white;
  background-color: black;
  &:hover{
    background-color: #F2F2F2;
    color: black;
  }
`
const Img = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background-color: green;
`
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  width:42%;
  display: flex;
  align-items: center;
  background-color: orange;
`
const Adiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Others = styled.div`
  width: 32%;
  height: 500px;
  background-color:powderblue;
`
const Commt = styled.div`
  width: 65%;
  height: 400px;
  background-color: pink;
`
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`
const Top = styled.video`
    height: 600px;
    width: 100%;
    background-color: black;
    border-radius: 15px;
`
const Wrapper = styled.div`
    width: 98%;
`
const Container = styled.div`
    min-height:700px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`