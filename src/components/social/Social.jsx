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
                                    <iframe width="420" height="345" title={video.title} src={video.url}>
                                    </iframe>
                                </div>
                            )
                        } else if (video.type === streamingVideo) {
                            return (
                                <div className="landing__container__social__streaming">
                                    <img src={video.icon} alt={video.title}/>
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