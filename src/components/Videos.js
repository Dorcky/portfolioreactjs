import React from 'react';

const Videos = () => {
    return (
        <section id="videos" className="py-5">
            <div className="container">
                <h2 className="section-title text-center">Mes Vidéos</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/w43BNI3FhdQ" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/h8ZvK2lTfmw" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Videos;