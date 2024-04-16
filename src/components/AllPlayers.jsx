import getPlayers from "../API"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate} from 'react-router-dom'

export default function AllPlayers () {
    const [players, setPlayers]= useState(null)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState(null)

    useEffect(()=>{
        async function fetchPlayers () {
            const response = await getPlayers()
            setPlayers(response.players)
        }
        fetchPlayers()
    },[])
    console.log(players);
    const playersToDisplay = searchParams ? players.filter((player) => player.name.toLowerCase().includes(searchParams.toLowerCase())) : players
    
    return (
        <> 
            <h1 className="allPlayersTitle">Puppy Bowl</h1>
            <div id='search'>
                Search:<input 
                id="searchBar" 
                type='text' 
                value={searchParams} 
                onChange={(e) => {setSearchParams(e.target.value)}}/>
            </div>
            <div className="allPlayers">
                {playersToDisplay &&
                playersToDisplay.map((player)=>{
                    return (
                        <div key={player.id}>
                            <h4 className='player' onClick={() => navigate(`/players/${player.id}`)}>{player.name}</h4>
                        </div>
                    )})
                }
            </div>
        </>
    ) 
}