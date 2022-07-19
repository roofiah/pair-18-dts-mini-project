import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../configs/firebase';
import PopularMovies from './listMovies/PopularMovies';
import TopMovies from './listMovies/TopMovies';
import UserList from './listMovies/UserList';

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <div className="content">
            <PopularMovies />
            <TopMovies />
            <UserList />
        </div>

        // Current user: {user.email}
    )
}

export default Home;