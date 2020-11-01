import React from 'react';
import videos from './video/videos';
import './Social.css';

function Social() {

    const youtubeVideo = 'youtube-video';
    const streamingVideo ='streaming';
    const videoWidth = 300;
    const videoHeight = 164.29;

    return (
            <div className="landing__container__social">
                {
                    videos.map((video) => {
                        if (video.type === youtubeVideo) {
                            return (
                                <div className="landing__container__social__streaming-block">
                                    <span className="landing__container__social__video__title">{video.title}</span>
                                    <div className="landing__container__social__video social__block-element" id={video.title}>
                                        <iframe width={`${videoWidth}px`} height={videoHeight} src={video.url} 
                                        frameBorder="0"  title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
                                        </iframe>
                                    </div>
                                </div>
                            )
                        } else if (video.type === streamingVideo) {
                            return (
                                <div className="landing__container__social__streaming-block">
                                    <span className="landing__container__social__video__title">{video.title}</span>
                                       <a href={video.url}>
                                        <div className="landing__container__social__streaming social__block-element" style={{backgroundImage: `url(${video.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                                            <img src={video.icon} alt={video.title} className="landing__container__social__streaming__twitch-icon"/>
                                        </div>
                                       </a>
                                </div>
                            )
                        }
                        return <h1>No videos found :/</h1>;
                    })
                }
            </div>
        )
}

export default Social;