import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      setStatus('Tous les champs sont obligatoires.');
      return;
    }

    const data = {
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('https://sendemail-qug0.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Votre message a bien été envoyé !');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Erreur lors de l\'envoi du message. Essayez à nouveau.');
      }
    } catch (error) {
      setStatus('Erreur réseau, veuillez réessayer plus tard.');
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Contactez-moi</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="position-relative">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titre du message"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-flex align-items-center gap-3">
                <button type="submit" className="btn btn-custom">
                  Envoyer
                </button>
                {status && (
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      color: 'var(--text-color)',
                      animation: 'fadeIn 0.3s ease-in-out',
                      fontSize: '0.9rem',
                      display: 'inline-block'
                    }}
                  >
                    {status}
                  </div>
                )}
              </div>
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