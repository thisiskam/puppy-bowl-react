import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <>
            <div id="navbar">
                <svg width="64px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#DD2E44" d="M15 27v6s0 3 3 3s3-3 3-3v-6h-6z"></path><path fill="#BE1931" d="M15 33l.001.037c1.041-.035 2.016-.274 2.632-1.286a.426.426 0 0 1 .735 0c.616 1.011 1.591 1.251 2.632 1.286V27h-6v6z"></path><path fill="#D99E82" d="M31.954 21.619c0 6.276-5 6.276-5 6.276h-18s-5 0-5-6.276c0-6.724 5-18.619 14-18.619s14 12.895 14 18.619z"></path><path fill="#F4C7B5" d="M18 20c-7 0-10 3.527-10 6.395a5.5 5.5 0 0 0 5.5 5.5c1.605 0 3.042-.664 4.049-2.767a.495.495 0 0 1 .901 0c1.007 2.103 2.445 2.767 4.049 2.767a5.5 5.5 0 0 0 5.5-5.5C28 23.527 25 20 18 20z"></path><path fill="#292F33" d="M15 22.895c-1 1 2 4 3 4s4-3 3-4s-5-1-6 0zM13 19c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1-.9 2-2 2z"></path><path fill="#662113" d="M15 3.608C13.941 2.199 11.681.881 2.828 4.2C-1.316 5.754.708 17.804 3.935 18.585c1.106 0 4.426 0 4.426-8.852c0-.22-.002-.423-.005-.625C10.35 6.298 12.5 4.857 15 3.608zm18.172.592C24.319.881 22.059 2.199 21 3.608c2.5 1.25 4.65 2.691 6.644 5.501c-.003.201-.005.404-.005.625c0 8.852 3.319 8.852 4.426 8.852c3.227-.782 5.251-12.832 1.107-14.386z"></path><circle fill="#D99E82" cx="23.5" cy="25.5" r=".5"></circle><circle fill="#D99E82" cx="11.5" cy="25.5" r=".5"></circle><circle fill="#D99E82" cx="25.5" cy="27.5" r=".5"></circle><circle fill="#D99E82" cx="10.5" cy="27.5" r=".5"></circle><circle fill="#D99E82" cx="23" cy="28" r="1"></circle><circle fill="#D99E82" cx="13" cy="28" r="1"></circle><path fill="#380F09" d="M9.883 7.232c-.259-.673-.634-1.397-1.176-1.939a.999.999 0 1 0-1.414 1.414c.57.57 1.066 1.934 1.068 2.346c.145-.404.839-1.15 1.522-1.821zm16.217 0c.259-.672.634-1.397 1.176-1.939a.999.999 0 1 1 1.414 1.414c-.57.57-1.066 1.934-1.068 2.346c-.145-.404-.839-1.15-1.522-1.821z"></path></g></svg>
                <div className="nav-links">
                    <Link to='/' className='nav-button'>All Players</Link>
                    <Link to='/newplayer' className='nav-button'>Add A New Player</Link>
                </div>
            </div>
        </>
    )
}