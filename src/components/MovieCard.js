import React from 'react';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movie/${movie.id}`)
    }
    return (
        <Card
            onClick={handleClick}
            className='movie-content'>
            <CardMedia
                component="img"
                height="300"
                image={`${BASE_IMAGE_URL}${movie.poster_path}`} />
        </Card>
    )
}

export default MovieCard