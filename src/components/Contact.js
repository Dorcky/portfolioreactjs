import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="section-title text-center">Contactez-moi</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Titre du message" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="h4 mb-4">Coordonnées</h3>
                                <p><strong>Téléphone:</strong> +1 4385092299</p>
                                <p><strong>Email:</strong> dorcennawesky@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;