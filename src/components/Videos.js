import React from 'react';

const Videos = () => {
    return (
        <section id="videos" className="py-5" style={{ marginTop: '-50px' }}>
            <div className="container">
                <h2 className="section-title text-center">Mes Vidéos</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/w43BNI3FhdQ" allowFullScreen></iframe>
                        </div>
                        <p className="video-description text-start" style={{ marginTop: '-20px' }}>
                        Découvrez un projet complet utilisant React JS pour la version web et SwiftUI pour l'application mobile, illustrant la création d'une application multiplateforme.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/h8ZvK2lTfmw" allowFullScreen></iframe>
                        </div>
                        <p className="video-description text-start" style={{ marginTop: '-20px' }}>
                            Une vidéo présentant un site e-commerce en construction avec une interface simple et moderne. Le projet est en cours de développement avec un focus sur l'expérience utilisateur.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/mHRVy142JWI" allowFullScreen></iframe>
                        </div>
                        <p className="video-description text-start" style={{ marginTop: '-20px' }}>
                            Une présentation de l'interface UI/UX pour une application dédiée à l'entraînement physique. Le design est pensé pour être intuitif et motivant pour les utilisateurs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Videos;
