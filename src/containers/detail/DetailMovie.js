import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiUrl from '../../utils/apiUrl';
import SimilarMovies from '../home/listMovies/SimilarMovies';
import TopMovies from '../home/listMovies/TopMovies';
import VideoMovies from '../home/listMovies/VideoMovies';
import './DetailMovie.css'

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/'

const DetailMovie = () => {
    let { idMovie } = useParams();
    const [detail, setDetail] = useState({})

    const fetchDetail = async () => {
        try {
            const fetchData = await apiUrl.get(`movie/${idMovie}`);
            setDetail(fetchData.data);
            console.log(fetchData.data)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchImages = async () => {
        try {
            const fetchData = await apiUrl.get(`movie/${idMovie}/images`)
            console.log(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetail()
        fetchImages()
    }, [idMovie]);

    return (
        <div className="container-detail">
            <div className='box-image'>
                <div className='image-backdrop'>
                    <img
                        src={`${BASE_IMAGE_URL}${detail.backdrop_path}`}
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
            <SimilarMovies idMovie={idMovie} />
            <TopMovies />
            <VideoMovies idMovie={idMovie} />
        </div>
    )
}

export default DetailMovie