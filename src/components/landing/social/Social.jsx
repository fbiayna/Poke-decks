import React from 'react';
import videos from './video/videos';

function Social() {

    const youtubeVideo = 'youtube-video';
    const streamingVideo ='streaming';


    return (
            <div className="landing__container__social">
                {
                    videos.map((video) => {
                        if (video.type === youtubeVideo) {
                            return (
                                <div className="landing__container__social__video">
                                    <iframe className="landing__container__social__video__iframe" src={video.url} 
                                    frameborder="0"  title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                </div>
                            )
                        } else if (video.type === streamingVideo) {
                            return (
                                <div className="landing__container__social__streaming">
                                    <img src={video.icon} alt={video.title}/>
                                    {console.log(video.icon)}
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