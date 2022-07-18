import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../../components/MovieCard';
import apiUrl from '../../../utils/apiUrl';
import './ListMovies.css';

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    const fetchPopular = async () => {
        try {
            const fetchData = await apiUrl.get("movie/popular");
            setMovies(fetchData.data.results);
        } catch (error) {
            console.log(error);
            setMovies([]);
        }
    }

    useEffect(() => {
        fetchPopular()
    }, []);

    return (
        <div className="container">
            <h3 className='title-list'>Popular</h3>
            <ImageList
                sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                    gridAutoColumns: "minmax(160px, 1fr)"
                }}
            >
                {movies.map((data) => (
                    <ImageListItem>
                        <MovieCard key={data.title} movie={data}></MovieCard>
                        {/* <ImageListItemBar title={image.thumbnail.name} /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}
export default PopularMovie