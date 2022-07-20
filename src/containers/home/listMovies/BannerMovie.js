import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import apiUrl from '../../../utils/apiUrl';
import './ListMovies.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const BannerMovie = () => {
    const navigate = useNavigate()
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

    const handleClick = (id) => {
        navigate(`/movie/${id}`)
    }

    console.log('hasil result', (JSON.stringify(movies[0])))
    return (
        <div>
            {movies && movies[0] ?
                <div className="banner">
                    <div
                        className="banner-inner"
                        onClick={() => handleClick(movies[0].id)}
                    >
                        <div className="banner-left">
                            <div className="banner-title">{movies[0].original_title}</div>
                            <div className="banner-overview">{movies[0].overview}</div>
                        </div>
                        <div className="banner-right">
                            <img
                                src={`${BASE_IMAGE_URL}${movies[0].backdrop_path}`}
                                alt="Banner"
                                className="banner-img"
                            />
                        </div>
                    </div>
                </div>
                :
                <div>No Movie yet...</div>}
        </div>
    )
}
export default BannerMovie

