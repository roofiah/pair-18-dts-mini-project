import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../../components/MovieCard';
import apiUrl from '../../../utils/apiUrl';
import './ListMovies.css';

const SimilarMovies = ({ idMovie }) => {
    const [movies, setMovies] = useState([]);

    const fetchSimilar = async () => {
        try {
            const fetchData = await apiUrl.get(`movie/${idMovie}/similar`);
            setMovies(fetchData.data.results);
        } catch (error) {
            console.log(error);
            setMovies([]);
        }
    }

    useEffect(() => {
        fetchSimilar()
    }, [idMovie]);

    return (
        <div className='container'>
            <h3 className='title-list'>Similar Movies</h3>
            {movies ?
                <ImageList sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                    gridAutoColumns: "minmax(160px, 1fr)"
                }}>
                    {movies.map((data) => (
                        <ImageListItem>
                            <MovieCard movie={data}></MovieCard>
                        </ImageListItem>
                    ))}
                </ImageList>
                :
                <div>No Movie yet...</div>}
        </div>
    )
}
export default SimilarMovies