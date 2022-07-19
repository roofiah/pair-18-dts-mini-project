import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../configs/firebase';
import PopularMovie from './listMovies/PopularMovie';
import TopMovies from './listMovies/TopMovies';

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <div className="content">
            <PopularMovie />
            <TopMovies />
        </div>

        // Current user: {user.email}
    )
}

export default Home;