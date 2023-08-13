import React,{useEffect,useState} from 'react'
import "./RowPost.css";
import axios from "../../axios"
import {imageUrl,API_KEY} from "../../constants/constants"
import YouTube from "react-youtube"


function RowPost(props) {
  const[moviesList,setMoviesList] = useState([])
  const [movieId,setMovieId]= useState("")

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMoviesList(response.data.results)
      console.log(response.data);

    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setMovieId(response.data.results[0])
      }else{
        console.log("Array empty");
      }
    })
  }

  const closeVideo = ()=>{
    setMovieId(null);
  }

  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className="posters">
          {moviesList.map((obj,index)=>
             <img key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" /> 
          )}
           
           
        </div>

       {movieId && <YouTube videoId={movieId.key} opts={opts}  />}
       {movieId && <button onClick={()=>closeVideo()} className='button'>Close</button>}

    </div>
  )
}

export default RowPost