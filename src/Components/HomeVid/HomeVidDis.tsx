import styled from "styled-components";
import {useEffect, useState} from 'react'
import HomeVidP from "./HomeVidP";


const HomeVidDis = () =>{

    const [state, setState] = useState<any>({})
    useEffect(()=>{
        setState(JSON.parse(localStorage.getItem("youtubeVideos")!));
    })
    return(
        <div>
           <Container>
           {state?.items?.map((prop:any)=>(
           <HomeVidP 
               src={`https://youtube.com/embed/${prop?.id.videoId}`}
               img={prop.snippet.thumbnails.high.url}
               h1={prop?.snippet.thumbnails.title}
               span={prop.snippet.channelTitle}
               span1="dgfhgjk"
              />
            ))} 
           </Container>
        </div>
    )
}
export default HomeVidDis;
const Container = styled.div`
    width: 1269px;
    display: flex;
    flex-wrap: wrap;
`