import * as React from 'react';
import BannerMovie from './listMovies/BannerMovie';
import PopularMovies from './listMovies/PopularMovies';
import TopMovies from './listMovies/TopMovies';
import UserList from './listMovies/UserList';

const Home = () => {
    return (
        <div className="content">
            <BannerMovie />
            <PopularMovies />
            <TopMovies />
            <UserList />
        </div>
    )
}

export default Home;