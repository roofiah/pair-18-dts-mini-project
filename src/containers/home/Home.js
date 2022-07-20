import * as React from 'react';
import PopularMovies from './listMovies/PopularMovies';
import TopMovies from './listMovies/TopMovies';
import UserList from './listMovies/UserList';

const Home = () => {
    return (
        <div className="content">
            <PopularMovies />
            <TopMovies />
            <UserList />
        </div>
    )
}

export default Home;