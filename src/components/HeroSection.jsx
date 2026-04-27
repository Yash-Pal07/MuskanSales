export default function HeroSection({ phoneDisplay, phoneRaw, whatsappUrl }) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-box">
          <span className="badge">AUTHORISED SERVICE CENTRE</span>
          <h1>MUSKAN SALES</h1>
          <p>
            DIAL FOR Most Faithfully World मे जुड़ने के लिए धन्यवाद। हमारे यहां इन सभी प्रकार
            की home service दी जाती है। Fast, reliable, and professional support for your
            home appliances.
          </p>
          <div className="cta-row">
            <a className="btn btn-call" href={`tel:${phoneRaw}`}>
              Call Now: {phoneDisplay}
            </a>
            <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
