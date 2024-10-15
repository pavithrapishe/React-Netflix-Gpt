import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate()

    // const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                navigate("/error")
            })
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
            <div>
                <img className="w-12 h-12 " alt="userIcon"
                    src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229
"/>
                <button className='text-white font-bold' onClick={handleSignOut}>Sign out</button>
            </div>

        </div>

    )
}

export default Header