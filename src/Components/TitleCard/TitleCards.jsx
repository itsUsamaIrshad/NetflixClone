import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import { Link } from 'react-router-dom'

const TitleCards = ({title , category}) => {


  const [apiData , setApiData] = useState([])

  const cardRef = useRef()

const handleWheel = (event) =>
{
event.preventDefault()
cardRef.current.scrollLeft += event.deltaY
}


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTlkMzMyMDgzZWMwZGE1OTU1MTM4ODY0N2M2YjE1NCIsIm5iZiI6MTczNjA5OTkyNi4xMTksInN1YiI6IjY3N2FjODU2MTU1MjFmODNkOTY2ZjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52VfvyrRz3fVqXEQKghJinrMC3ApxvqTGTFDRHQGzGU'
  }
};







  useEffect(()=>
  {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


    cardRef.current.addEventListener('wheel' , handleWheel)

  },[])


  return (
    <div className='titleCards'>
      <h2>{title ? title :'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((item , index)=>
        {
          return  <Link to={`/player/${item.id}`} key={index} className='card'>
          <img src={'https://image.tmdb.org/t/p/w500'+  item.backdrop_path} alt="img" />
          <p>{item.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards