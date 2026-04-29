import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FloatingCallButton from "./components/FloatingCallButton.jsx";
import { BRANDS, CONTACT, SERVICES } from "./data/siteData.js";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <HeroSection
        phoneDisplay={CONTACT.phoneDisplay}
        phoneRaw={CONTACT.phoneRaw}
        whatsappUrl={CONTACT.whatsappUrl}
        technicianImage={CONTACT.technicianImage}
      />

      <main>
        <ServicesSection services={SERVICES} />
        <ContactSection brands={BRANDS} contact={CONTACT} />
      </main>

      <FloatingCallButton phoneRaw={CONTACT.phoneRaw} />

      <footer>
        <div className="container">
          © {year} Muskan Sales • Reliable Home Appliance Services
        </div>
      </footer>
    </>
  );
}
