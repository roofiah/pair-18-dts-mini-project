import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../configs/firebase';
import PopularMovie from './listMovies/PopularMovie';
import TopMovies from './listMovies/TopMovies';

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <div>
            <PopularMovie />
            <TopMovies />
        </div>
        // <Container component="main" maxWidth="xs">
        //     <div style={{ margin: '20px' }}>
        //         Home Page <br />
        //         Current user: {user.email}
        //     </div>
        // </Container>
    )
}


export default Home;