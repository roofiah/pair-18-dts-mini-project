import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/NavBar';
import Theme from '../../components/Theme';
import apiUrl from '../../utils/apiUrl';
import PopularMovie from '../home/listMovies/PopularMovie';
import TopMovies from '../home/listMovies/TopMovies';

import './DetailMovie.css'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

const DetailMovie = () => {
    let { movieId } = useParams();
    const [detail, setDetail] = useState({})

    const fetchDetail = async () => {
        try {
            const fetchData = await apiUrl.get(`movie/${movieId}`);
            setDetail(fetchData.data);
            console.log(fetchData.data)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchImages = async () => {
        try {
            const fetchData = await apiUrl.get(`movie/${movieId}/images`)
            console.log(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetail()
        fetchImages()
    }, []);

    return (
        <ThemeProvider theme={Theme}>
            <div className="container-detail">
                <NavBar />
                <div className='box-image'>
                    <div className='image-backdrop'>
                        <img
                            src={`${BASE_IMG_URL}${detail.backdrop_path}`}
                            alt={detail.title} />
                    </div>
                    <div className='text-on-image'>
                        <h1>{detail.title}</h1>
                        <span>{detail.overview}</span>
                    </div>
                </div>
                <div className='description'>
                    <h4>Description</h4>
                    <span>
                        {detail.overview}
                    </span>
                </div>

                {/* <a href="/">Back</a> */}
                <PopularMovie />
                <TopMovies />

                <Footer />
            </div>
        </ThemeProvider >
    )
}

export default DetailMovie