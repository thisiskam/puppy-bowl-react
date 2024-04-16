import getPlayers from "../API"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate} from 'react-router-dom'

export default function AllPlayers () {
    const [players, setPlayers]= useState('')
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState('')

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
        <div id='all-players-box'> 
            <h1 className="all-players-title">Puppy Bowl</h1>
            <div id='search'>
                <input 
                placeholder="Search"
                id="search-bar" 
                type='text' 
                value={searchParams} 
                onChange={(e) => {setSearchParams(e.target.value)}}/>
            </div>
            <div className="all-players">
                {playersToDisplay &&
                playersToDisplay.map((player)=>{
                    return (
                        <div key={player.id}>
                            <h4 className='player' onClick={() => navigate(`/players/${player.id}`)}>{player.name.charAt(0).toUpperCase() + player.name.slice(1)}</h4>
                        </div>
                    )})
                }
            </div>
        </div>
    ) 
}