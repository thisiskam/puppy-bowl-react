import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <>
            <div className="links">
                    <Link to='/' className='nav-button'>All Players</Link>
                    <Link to='/newplayer' className='nav-button'>Add A New Player</Link>
            </div>
        </>
    )
}