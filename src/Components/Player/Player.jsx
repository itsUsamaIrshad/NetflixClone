import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

    const {id} = useParams()

    const [apiData , setApiData] = useState({name:'', key:'', published_at:'', type:''})

    const navigate = useNavigate()


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTlkMzMyMDgzZWMwZGE1OTU1MTM4ODY0N2M2YjE1NCIsIm5iZiI6MTczNjA5OTkyNi4xMTksInN1YiI6IjY3N2FjODU2MTU1MjFmODNkOTY2ZjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52VfvyrRz3fVqXEQKghJinrMC3ApxvqTGTFDRHQGzGU'
        }
      };
    

        useEffect(()=>
        {
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    
        },[])

  return(

    <>
    
    <div className="player">
        <img src={back_icon} alt="img" onClick={()=>navigate(-2)}/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width={'90%'} height={'90%'} title='trailer' frameBorder={0} allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0 , 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
    

    </>
  )
}

export default Player