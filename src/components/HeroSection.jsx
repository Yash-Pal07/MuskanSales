export default function HeroSection({
  phoneDisplay,
  phoneRaw,
  whatsappUrl,
  technicianImage,
}) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-box">
          <div className="hero-content">
            <div className="hero-text">
              <span className="badge">AUTHORISED SERVICE CENTRE</span>
              <h1>MUSKAN SALES</h1>
              <p>
                DIAL FOR Most Faithfully World मे जुड़ने के लिए धन्यवाद। हमारे यहां इन सभी
                प्रकार की home service दी जाती है। Fast, reliable, and professional support
                for your home appliances.
              </p>
              <div className="cta-row">
                <a className="btn btn-call" href={`tel:${phoneRaw}`}>
                  Call Now: {phoneDisplay}
                </a>
                <a
                  className="btn btn-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                src={technicianImage}
                alt="Service technician"
                className="hero-technician-image"
                width="320"
                height="426"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
