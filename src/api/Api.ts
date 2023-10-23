import axios from 'axios';

// const url:string = "localhost:9988/data"

// export const copyToRight = async (data:any) => {
//   try{
//     return axios.post(url, data).then((res)=>{

//     })
//   } catch((err:any) => {
//     console.error()
  // })
// }

export const SearchVideo = async (search: string) =>{
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: search,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '10',
          order: 'date'
        },
        headers: {
          'X-RapidAPI-Key': 'af7925a4c5msh7882bb20c533a59p1a7e10jsnceeaf9ea0537',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          localStorage.setItem('youtubeVideos', JSON.stringify(response.data));
          return response.data;
      } catch (error) {
          console.error(error);
      }
}
