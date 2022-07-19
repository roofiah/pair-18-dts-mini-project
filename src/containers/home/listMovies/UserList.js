import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import apiUrl from "../../../utils/apiUrl";
import './ListMovies.css';

const UserList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchUserMovies = async () => {
            try {
                const fetchData = await apiUrl.get("trending/all/week");
                setMovies(fetchData.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserMovies();
    }, []);

    return (
        <div className="container">
            <h3 className='title-list'>User List</h3>
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
                            <MovieCard movie={data}></MovieCard>
                        </ImageListItem>
                    ))}
                </ImageList>
                :
                <div>No Movie yet...</div>}
        </div>
    );
};

export default UserList;