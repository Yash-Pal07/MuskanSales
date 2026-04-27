export default function ContactSection({ brands, contact }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Authorized Partner Brands</h2>
        <p className="section-subtitle">
          We proudly provide service support for these trusted brands.
        </p>

        <div className="brands">
          {brands.map((brand) => (
            <div key={brand} className="brand">
              {brand}
            </div>
          ))}
        </div>

        <div className="contact-panel" id="contact">
          <h3>Contact Information</h3>
          <p>For booking, installation, repair, or urgent support, call us directly.</p>
          <div className="contact-actions">
            <a className="contact-chip" href={`tel:${contact.phoneRaw}`}>
              📞 {contact.phoneDisplay}
            </a>
            <a className="contact-chip" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              💬 Chat on WhatsApp
            </a>
            <a className="contact-chip" href={`mailto:${contact.email}`}>
              ✉️ {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
