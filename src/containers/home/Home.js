import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ThemeProvider } from '@mui/material/styles';
import { auth } from '../../configs/firebase';
import PopularMovie from './listMovies/PopularMovie';
import TopMovies from './listMovies/TopMovies';
import NavBar from '../../components/NavBar';
import Footer from '../../components/footer/Footer';
import Theme from '../../components/Theme';
import '../../App.css';


const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <ThemeProvider theme={Theme}>
            <div className="App">
                <NavBar />
                <PopularMovie />
                <TopMovies />
                <Footer />
            </div>
        </ThemeProvider>

        // <Container component="main" maxWidth="xs">
        //     <div style={{ margin: '20px' }}>
        //         Home Page <br />
        //         Current user: {user.email}
        //     </div>
        // </Container>
    )
}


export default Home;