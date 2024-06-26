import { getSinglePlayer } from "../API"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { deletePlayer } from "../API"
import { Link } from 'react-router-dom'

export default function SinglePlayer () {
    const [singlePlayer, setSinglePlayer] = useState('')
    const { userId } = useParams()

    console.log(userId);

    useEffect(()=>{
        async function fetchSinglePlayer (id) {
            const response = await getSinglePlayer(id)
            setSinglePlayer(response.player)
        }
        fetchSinglePlayer(userId)
    },[])

    async function removePlayer(id) {
        await deletePlayer(id)
        location.reload()
    }

    console.log(singlePlayer)
    return (
        <>{ singlePlayer 
            ? 
            (<div id='single-player'>
                <h2>{singlePlayer.name.toUpperCase()}</h2>
                <h3>{singlePlayer.breed.charAt(0).toUpperCase() + singlePlayer.breed.slice(1)}</h3>
                <h4>{singlePlayer.status.charAt(0).toUpperCase() + singlePlayer.status.slice(1)}</h4>
                <img src={singlePlayer.imageUrl} alt="puppy" width='200px' /><br />
                <button id="delete" onClick={() => {removePlayer(singlePlayer.id)}}>Delete Player</button>
            </div>) 
            :
            (<div className="removed-player">
                <h3>Player Has Been Removed</h3>
                <Link to='/' className='button'>Return</Link>
            </div>)
            } 
        </>
    )
}