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

const PopularMovies = () => {
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

    return (
        <div className='container'>
            <h3 className='title-list'>Popular</h3>
            {movies ?
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    speed={300}
                    slidesPerView={5}
                    loop
                    className="swiper-container"
                >
                    <div className="imgWrapper">
                        {movies.map((movie) => {
                            return (
                                <SwiperSlide
                                    className="swiper-slide"
                                    key={movie.id}>
                                    <div
                                        className="imageContainer"
                                        onClick={() => handleClick(movie.id)}
                                    >
                                        <img src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="poster" />
                                        <div className="imgTitle">{movie.original_title}</div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
                :
                <div>No Movie yet...</div>}
        </div>
    )
}
export default PopularMovies

