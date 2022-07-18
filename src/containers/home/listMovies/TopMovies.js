import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import apiUrl from "../../../utils/apiUrl";
import './ListMovies.css';

const TopMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTopMovies = async () => {
            try {
                const fetchData = await apiUrl.get("movie/top_rated");
                setMovies(fetchData.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTopMovies();
    }, []);

    return (
        <div className="container">
            <h3 className='title-list'>Top Movies</h3>
            {movies ?
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
                :
                <div>No Movie yet...</div>}
        </div>
    );
};

export default TopMovies;