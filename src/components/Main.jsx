import { Route, Routes } from 'react-router-dom'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import NewPlayerForm from './NewPlayerForm';

export default function Main () {

    return (
        <>
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='players/:userId' element={<SinglePlayer />} />
                <Route path='/newplayer' element={<NewPlayerForm />} />
            </Routes>
        </>
    )
}