function ServiceCard({ service }) {
  return (
    <article className={`card ${service.featured ? "highlight" : ""}`}>
      <div className="icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <ul>
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesSection({ services }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Core Services</h2>
        <p className="section-subtitle">
          Clean, transparent, and customer-focused appliance service for your home.
        </p>
        <div className="grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
