function Contact() {
  return (
    <section id="form" className="contact-section">
      <h2>Contactez-nous</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows="5"
          />
        </div>
        <button type="submit" className="submit-btn" disabled>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
