import * as React from 'react';
import Container from '@mui/material/Container';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../configs/firebase';

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <Container component="main" maxWidth="xs">
            <div style={{ margin: '20px' }}>
                Home Page <br />
                Current user: {user.email}
            </div>
        </Container>
    )
}


export default Home;