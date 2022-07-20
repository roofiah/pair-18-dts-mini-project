import React, { useState, useEffect } from 'react'
import apiUrl from "../../../utils/apiUrl";

const VideoMovies = ({ idMovie }) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const fetchData = await apiUrl.get(`movie/${idMovie}/videos`);
                setVideos(fetchData.data.results);
                console.log(fetchData.data.results)
            } catch (error) {
                console.log(error);
                setVideos([]);
            }
        }
        fetchVideos()
    }, [idMovie]);

    return (
        <div>
            <h3 className='title-list'>Videos</h3>
            {videos && (
                <div className="video-content">
                    {videos.map((data) => (
                        <div className="box-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${data.key}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                title={data.name}
                                width="853"
                                height="480"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>


    )
}

export default VideoMovies