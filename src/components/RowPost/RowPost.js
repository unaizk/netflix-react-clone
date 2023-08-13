import React,{useEffect,useState} from 'react'
import "./RowPost.css";
import axios from "../../axios"
import {imageUrl} from "../../constants/constants"


function RowPost(props) {
  const[moviesList,setMoviesList] = useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMoviesList(response.data.results)
      console.log(response.data);
    })
  },[])
  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className="posters">
          {moviesList.map((obj)=>
             <img className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" /> 
          )}
           
           
        </div>

    </div>
  )
}

export default RowPost